import { Ionicons } from "@expo/vector-icons";
import { useCallback } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function RecordScreen() {
  // const [recording, setRecording] = useState<Audio.Recording | null>(null);
  // const [isRecording, setIsRecording] = useState(false);
  // const [timer, setTimer] = useState(0);

  // useEffect(() => {
  //   let interval: NodeJS.Timeout;
  //   if (isRecording) {
  //     interval = setInterval(() => {
  //       setTimer((prev) => prev + 1);
  //     }, 1000);
  //   }
  //   return () => clearInterval(interval);
  // }, [isRecording]);

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, "0")}:${secs
      .toString()
      .padStart(2, "0")}`;
  };

  // const startRecording = async () => {
  //   try {
  //     await Audio.requestPermissionsAsync();
  //     await Audio.setAudioModeAsync({
  //       allowsRecordingIOS: true,
  //       playsInSilentModeIOS: true,
  //     });

  //     const { recording } = await Audio.Recording.createAsync(
  //       Audio.RecordingOptionsPresets.HIGH_QUALITY
  //     );

  //     setRecording(recording);
  //     setIsRecording(true);
  //     setTimer(0);
  //   } catch (err) {
  //     console.error('Failed to start recording', err);
  //   }
  // };

  // const stopRecording = async () => {
  //   if (!recording) return;

  //   setIsRecording(false);
  //   await recording.stopAndUnloadAsync();

  //   const uri = recording.getURI();
  //   if (!uri) return;

  //   // Generate a timestamp-based filename
  //   const timestamp = new Date().toISOString().replace(/[:.]/g, '-');
  //   const newUri = `${FileSystem.documentDirectory}recording-${timestamp}.m4a`;

  //   await FileSystem.moveAsync({
  //     from: uri,
  //     to: newUri,
  //   });

  //   setRecording(null);

  //   if (Platform.OS !== 'web') {
  //     await Sharing.shareAsync(newUri);
  //   }
  // };

  const RecordButton = useCallback(
    () => (
      <TouchableOpacity
        style={[
          styles.recordButton,
          // isRecording && styles.recordingButton
        ]}
        // onPress={isRecording ? stopRecording : startRecording}
      >
        <Ionicons
          // name={isRecording ? "stop" : "mic"}
          name="mic"
          size={32}
          color="#fff"
        />
      </TouchableOpacity>
      // ), [isRecording]);
    ),
    []
  );

  return (
    <View style={styles.container}>
      <View style={styles.timerContainer}>
        <Text style={styles.timer}>0.0</Text>
        <Text style={styles.recordingText}>{"Ready to Record"}</Text>
      </View>
      <RecordButton />
      <Text style={styles.hint}>Tap to stop recording</Text>
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
