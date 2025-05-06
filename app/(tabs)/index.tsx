import { Ionicons } from "@expo/vector-icons";
import { AudioModule, RecordingPresets, useAudioRecorder } from "expo-audio";
import { useCallback, useEffect } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function RecordScreen() {
  const audioRecorder = useAudioRecorder(RecordingPresets.LOW_QUALITY);

  const record = async () => {
    console.log("Starting recording...");
    await audioRecorder.prepareToRecordAsync();
    audioRecorder.record();
    console.log("Recording started");
  };

  const stopRecording = async () => {
    console.log("Stopping recording...");
    // The recording will be available on audioRecorder.uri
    await audioRecorder.stop();
    console.log("Recording stopped");
  };

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, "0")}:${secs
      .toString()
      .padStart(2, "0")}`;
  };

  useEffect(() => {
    (async () => {
      const status = await AudioModule.requestRecordingPermissionsAsync();
      if (!status.granted) {
        alert("Permission to access microphone was denied");
      }
    })();
  }, []);

  useEffect(() => {
    console.log("Recording URI: ", audioRecorder.uri);
    console.log("Recording Status: ", audioRecorder.isRecording);
    console.log("Recording Time: ", audioRecorder.currentTime);
  }, [audioRecorder.isRecording]);

  const RecordButton = useCallback(
    () => (
      <TouchableOpacity
        style={[
          styles.recordButton,
          audioRecorder.isRecording && styles.recordingButton,
        ]}
        onPress={audioRecorder.isRecording ? stopRecording : record}
      >
        <Ionicons
          name={audioRecorder.isRecording ? "stop" : "mic"}
          size={32}
          color="#fff"
        />
      </TouchableOpacity>
    ),
    [audioRecorder.isRecording]
  );

  return (
    <View style={styles.container}>
      <View style={styles.timerContainer}>
        <Text style={styles.timer}>
          {formatTime(audioRecorder.currentTime)}
        </Text>
        <Text style={styles.recordingText}>
          {audioRecorder.isRecording ? "Recording" : "Ready to Record"}
        </Text>
      </View>
      <RecordButton />
      <Text style={styles.hint}>
        {audioRecorder.isRecording
          ? "Tap to stop recording"
          : "Tap to start recording"}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1a1a1a",
    alignItems: "center",
    justifyContent: "center",
  },
  timerContainer: {
    alignItems: "center",
    marginBottom: 50,
  },
  timer: {
    fontSize: 64,
    color: "#fff",
    fontWeight: "200",
  },
  recordingText: {
    color: "#ff4757",
    fontSize: 18,
    marginTop: 10,
  },
  recordButton: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: "#ff4757",
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  recordingButton: {
    backgroundColor: "#2d3436",
    borderWidth: 2,
    borderColor: "#ff4757",
  },
  hint: {
    color: "#888",
    marginTop: 30,
    fontSize: 16,
  },
});
