import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { colors } from "../../styles/colors";

interface NavbarItem {
  label: string;
  route: string;
  icon: string;
}

interface NavbarProps {
  onNavigate: (route: string) => void;
  activeRoute?: string;
}

const navItems: NavbarItem[] = [
  { label: "Nutrição", route: "Nutrition", icon: "🥗" },
  { label: "IA Generativa", route: "GenerativeAI", icon: "🤖" },
  { label: "React & Flutter", route: "RNFlutterCuriosities", icon: "⚛️" },
  { label: "Mercado TI", route: "TechMarket", icon: "💼" },
];

export function Navbar({ onNavigate, activeRoute }: NavbarProps) {
  return (
    <View style={styles.container}>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.content}
      >
        {navItems.map((item) => (
          <TouchableOpacity
            key={item.route}
            style={[
              styles.navItem,
              activeRoute === item.route && styles.navItemActive,
            ]}
            onPress={() => onNavigate(item.route)}
          >
            <Text style={styles.icon}>{item.icon}</Text>
            <Text
              style={[
                styles.label,
                activeRoute === item.route && styles.labelActive,
              ]}
            >
              {item.label}
            </Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    borderBottomWidth: 1,
    borderBottomColor: colors.background,
  },
  content: {
    flexDirection: "row",
    paddingHorizontal: 8,
    paddingVertical: 8,
  },
  navItem: {
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 16,
    paddingVertical: 12,
    marginHorizontal: 4,
    borderRadius: 8,
    backgroundColor: colors.background,
  },
  navItemActive: {
    backgroundColor: colors.primary,
  },
  icon: {
    fontSize: 24,
    marginBottom: 4,
  },
  label: {
    fontSize: 12,
    fontWeight: "600",
    color: colors.text,
  },
  labelActive: {
    color: colors.white,
  },
});
