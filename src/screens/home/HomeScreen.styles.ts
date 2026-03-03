import { StyleSheet } from "react-native";
import { COLORS } from "../../constants/colors";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
  },

  /* ---------------- HERO SECTION ---------------- */

heroWrapper: {
    alignSelf: "center",
    borderRadius: 20,
    overflow: "hidden",
    elevation: 6,
    aspectRatio: 3 / 2,   // 🔥 Exact match to image
    marginVertical: 12,
  },

  heroImage: {
    width: "100%",
    height: "100%",
  },

  overlay: {
    position: "absolute",
    bottom: 0,
    width: "100%",
    padding: 16,
    backgroundColor: COLORS.overlay,
  },

  heroTitle: {
    fontSize: 20,
    fontWeight: "700",
    color: COLORS.white,
  },

  heroSubtitle: {
    fontSize: 14,
    color: COLORS.lightAccent,
    marginTop: 4,
  },

  /* ---------------- GRID SECTION ---------------- */

  listContainer: {
    paddingHorizontal: 12,
    paddingBottom: 20,
  },

  card: {
    margin: 8,
    borderRadius: 20,
    backgroundColor: COLORS.card,
    overflow: "hidden",
    elevation: 5,
  },

  imageContainer: {
    height: "80%",
    justifyContent: "center",
    alignItems: "center",
    padding: 12,
  },

  cardImage: {
    width: "90%",
    height: "90%",
  },

  titleStrip: {
    height: "20%",
    backgroundColor: COLORS.cardStrip,
    borderTopWidth: 1,
    borderTopColor: COLORS.cardBorder,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 8,
  },

  cardText: {
    fontSize: 15,
    fontWeight: "600",
    color: COLORS.primaryText,
    textAlign: "center",
  },

  /* ---------------- FOOTER SECTION ---------------- */

  footerContainer: {
    marginTop: 20,
    paddingVertical: 30,
    alignItems: "center",
  },

  footerDivider: {
    width: 80,
    height: 2,
    backgroundColor: COLORS.gold,
    marginBottom: 16,
    borderRadius: 2,
  },

  footerMantra: {
    fontSize: 18,
    fontWeight: "600",
    color: COLORS.secondaryText,
    textAlign: "center",
  },
});

export default styles;