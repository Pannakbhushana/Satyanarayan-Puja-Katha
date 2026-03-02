import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFF8E1",
  },

  /* ---------------- HERO SECTION ---------------- */

  heroContainer: {
    margin: 12,
    borderRadius: 20,
    overflow: "hidden",
    elevation: 6,
  },

  heroImage: {
    width: "100%",
    height: 220,
  },

  overlay: {
    position: "absolute",
    bottom: 0,
    width: "100%",
    padding: 16,
    backgroundColor: "rgba(0,0,0,0.35)",
  },

  heroTitle: {
    fontSize: 20,
    fontWeight: "700",
    color: "#FFF",
  },

  heroSubtitle: {
    fontSize: 14,
    color: "#FFE0B2",
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
    backgroundColor: "#FFFBF2",
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
    backgroundColor: "#faefda",
    borderTopWidth: 1,
    borderTopColor: "#edd999",
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 8,
  },

  cardText: {
    fontSize: 15,
    fontWeight: "600",
    color: "#4E342E",
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
    backgroundColor: "#D4AF37",
    marginBottom: 16,
    borderRadius: 2,
  },

  footerMantra: {
    fontSize: 18,
    fontWeight: "600",
    color: "#6D4C41",
    textAlign: "center",
  },
});

export default styles;