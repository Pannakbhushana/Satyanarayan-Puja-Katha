import { StyleSheet } from "react-native";
import { COLORS } from "../../constants/colors";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
  },

  content: {
    paddingHorizontal: 20,
    paddingTop: 10,
  },

  sectionTitle: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 10,
    color: COLORS.titleText,
  },

  divider: {
    height: 2,
    width: 60,
    backgroundColor: COLORS.gold,
    alignSelf: "center",
    marginBottom: 25,
    borderRadius: 2,
  },

  block: {
    marginBottom: 30,
  },

  subTitle: {
    fontSize: 18,
    fontWeight: "600",
    marginBottom: 10,
    color: COLORS.titleText,
  },

  mantra: {
    fontSize: 18,
    lineHeight: 30,
    color: COLORS.contentText,
    textAlign: "left",
    marginBottom: 6,
  },

  description: {
    fontSize: 14,
    lineHeight: 22,
    color: COLORS.secondaryText,
  },

  kathaText: {
    fontSize: 18,
    lineHeight: 32,
    color: COLORS.contentText,
    textAlign: "left",
    letterSpacing: 0.3,
  },

  navigationContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 40,
    gap: 12,
  },
  
  navButton: {
    backgroundColor: COLORS.stepButtonBg,
    borderWidth: 1,
    borderColor: COLORS.stepButtonBorder,
    paddingVertical: 12,
    paddingHorizontal: 18,
    borderRadius: 12,
  },

  navText: {
    fontSize: 16,
    fontWeight: "600",
    color: COLORS.stepButtonText,
  },
});
