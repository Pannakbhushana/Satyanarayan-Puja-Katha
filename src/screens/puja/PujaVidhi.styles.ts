import { StyleSheet } from "react-native";
import { COLORS } from "../../constants/colors";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
  },

  header: {
    fontSize: 22,
    fontWeight: "bold",
    textAlign: "center",
    marginVertical: 20,
    color: COLORS.titleText,
  },

  listContainer: {
    paddingHorizontal: 16,
    paddingBottom: 30,
  },

  card: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: COLORS.card,
    padding: 18,
    borderRadius: 16,
    marginBottom: 14,
    elevation: 4,
  },

  number: {
    fontSize: 18,
    fontWeight: "600",
    marginRight: 12,
    color: COLORS.titleText,
  },

  title: {
    fontSize: 18,
    fontWeight: "500",
    color: COLORS.contentText,
  },
});