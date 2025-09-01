# FEC ClubHub Color Guide

## 🎨 Color Palette Overview

This color scheme is designed specifically for FEC ClubHub - a platform that showcases various clubs and organizations. The palette balances professionalism, innovation, and accessibility while maintaining visual hierarchy and brand consistency.

## 🌈 Primary Color System

### Core Brand Colors
- **Primary Blue** `#2563EB` - Main brand color, use for primary buttons, links, and key UI elements
- **Primary Dark** `#1E40AF` - Use for hover states, emphasis, and contrast
- **Primary Light** `#3B82F6` - Use for highlights, secondary actions, and subtle accents

### Supporting Colors
- **Success Green** `#10B981` - Success messages, completed actions, positive feedback
- **Warning Orange** `#F59E0B` - Alerts, notifications, important information
- **Error Red** `#EF4444` - Error messages, destructive actions, critical alerts
- **Info Blue** `#06B6D4` - Informational content, secondary actions, help text

## 🎯 Neutral Palette

### Text Colors
- **Primary Text** `#1F2937` - Main content, headings, important text
- **Secondary Text** `#6B7280` - Subheadings, descriptions, less important content
- **Muted Text** `#9CA3AF` - Placeholders, captions, disabled text

### Background Colors
- **Primary Background** `#FFFFFF` - Main page backgrounds, card content
- **Secondary Background** `#F9FAFB` - Page backgrounds, section dividers
- **Surface** `#F3F4F6` - Card backgrounds, elevated elements, form fields
- **Border** `#E5E7EB` - Dividers, borders, subtle separators

## ✨ Specialty Colors

### Club-Specific Colors
- **Club Accent** `#8B5CF6` - Purple for club-specific elements, special highlights
- **Innovation Gold** `#F59E0B` - For innovation centers, research clubs, achievements
- **Technology Teal** `#14B8A6` - For tech clubs, software development, programming
- **Cultural Coral** `#F97316` - For cultural clubs, creative activities, arts

## 🚀 Implementation Guidelines

### 1. Color Usage Hierarchy
- **Primary Blue** for main CTAs, navigation, and brand elements
- **Neutral grays** for text and backgrounds to ensure readability
- **Accent colors** sparingly for highlights and special features

### 2. Accessibility
- All text colors meet WCAG AA contrast requirements
- Use sufficient contrast between text and backgrounds
- Test color combinations for colorblind users

### 3. Component-Specific Usage

#### Navigation
- Primary blue for active states and main navigation
- Dark blue for hover effects
- Light backgrounds for navigation containers

#### Cards & Content
- White backgrounds for main content
- Light gray backgrounds for secondary content
- Subtle borders for separation

#### Buttons
- Primary blue for main actions
- Success green for positive actions
- Warning orange for important actions
- Error red for destructive actions

#### Forms
- Light gray backgrounds for form fields
- Primary blue for focus states
- Error red for validation errors
- Success green for successful submissions

### 4. Club Differentiation
- Use specialty colors to differentiate club types
- Technology clubs: Teal accents
- Cultural clubs: Coral highlights
- Innovation centers: Gold elements
- General clubs: Purple accents

## 🎨 CSS Custom Properties

All colors are available as CSS custom properties:

```css
/* Primary Colors */
color: var(--color-primary);
background-color: var(--color-primary-dark);

/* Supporting Colors */
color: var(--color-success);
color: var(--color-warning);

/* Neutral Colors */
color: var(--color-text);
background-color: var(--color-background);

/* Specialty Colors */
color: var(--color-club-accent);
background-color: var(--color-technology);
```

## 🔄 Dark Mode Considerations

When implementing dark mode:
- Invert background and text colors
- Maintain contrast ratios
- Use darker variants of primary colors
- Consider using the existing theme toggle in your navbar

## 📱 Responsive Design

- Colors work consistently across all device sizes
- Maintain color hierarchy on mobile devices
- Ensure touch targets have sufficient contrast

## 🧪 Testing Your Colors

1. **Contrast Testing**: Use tools like WebAIM's contrast checker
2. **Colorblind Testing**: Test with colorblind simulation tools
3. **Cross-Device Testing**: Verify colors look consistent across devices
4. **User Testing**: Get feedback on color choices from actual users

---

*This color scheme is designed to grow with your project while maintaining consistency and accessibility.*

