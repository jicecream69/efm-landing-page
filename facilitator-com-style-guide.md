# facilitator.com Style Guide
### Full-Stack Facilitator Landing Page Template

---

## 1. Brand Identity & Overall Aesthetic

The facilitator.com design language is **bold, energetic, and premium**. It combines a striking yellow primary color with clean black typography and generous white space. The overall feel is modern, confident, and approachable — designed to convey both fun and professionalism for a high-ticket training product.

**Key principles:**
- **High-contrast**: Yellow (#FFF200) against black and white creates visual punch
- **Bold typography**: Heavy-weight headings command attention
- **Generous whitespace**: Sections breathe with ample padding (60-100px vertical)
- **Centered layouts**: Most content is center-aligned for a focused reading experience
- **Alternating section backgrounds**: Yellow, white, black, and light gray create visual rhythm

---

## 2. Color Palette

### Primary Colors

| Color | Hex | RGB | Usage |
|-------|-----|-----|-------|
| **Facilitator Yellow** | `#FFF200` | `rgb(255, 242, 0)` | Hero backgrounds, accent sections, CTA highlights, highlight text, brand badge |
| **Black** | `#000000` | `rgb(0, 0, 0)` | Primary text, CTA buttons, dark sections, stat cards |
| **White** | `#FFFFFF` | `rgb(255, 255, 255)` | Backgrounds, text on dark, cards, navbar |
| **Dark Gray** | `#333333` | `rgb(51, 51, 51)` | Secondary text, nav text, muted body copy |

### Secondary / Neutral Colors

| Color | Hex | RGB | Usage |
|-------|-----|-----|-------|
| **Off-white / Light Gray** | `#FAFAFA` | `rgb(250, 250, 250)` | Info card backgrounds (details row), subtle section backgrounds |
| **Border Gray** | `#E5E5E5` | `rgb(229, 229, 229)` | Divider lines, card borders |
| **Tag Gray** | `rgba(0,0,0,0.08)` | — | Activity/topic tag backgrounds |
| **Subtle Gray** | `rgba(0,0,0,0.05)` | — | Hover states, very light backgrounds |

### Day Schedule Card Colors (Pastel Palette)

Each training day uses a distinct soft pastel:

| Day | Color | Hex (approx) | RGB |
|-----|-------|--------------|-----|
| Day 1 | Warm Peach | `#FFF4E0` | `rgb(255, 244, 224)` |
| Day 2 | Mint Green | `#E0FFF8` | `rgb(224, 255, 248)` |
| Day 3 | Soft Pink | `#F7E9F5` | `rgb(247, 233, 245)` |
| Day 4 | Lavender | `#F3EDFF` | `rgb(243, 237, 255)` |
| Day 5 | Light Blue | `#E6F4FF` | `rgb(230, 244, 255)` |

---

## 3. Typography

### Font Family

The primary typeface family is **Avenir Next LT Pro** with the following weight variants:

| Weight | Font Name | CSS Usage |
|--------|-----------|-----------|
| Medium (500) | `Avenir Next LT Pro Medium` | Body copy, paragraph text |
| Demi/Semi-Bold (600) | `Avenir Next LT Pro Demi` | Navigation, labels, sub-headings |
| Bold (700-800) | `Avenir Next LT Pro Bold` | All headings (H1–H4), CTA text |
| Bold Italic | `Avenir Next LT Pro Bold Italic` | Emphasis within headings (e.g., "Incredible!", "Days") |
| Medium Italic | `Avenir Next LT Pro Medium Italic` | Body italic text |

Fallback stack: `"Avenir Next", sans-serif`

### Type Scale

| Element | Font Size | Font Weight | Line Height | Letter Spacing | Notes |
|---------|-----------|-------------|-------------|----------------|-------|
| **H1** (Page title) | `88px` | `800` (Extra Bold) | `83.6px` (~0.95em) | `normal` | Used once per page, e.g., "Full-Stack Facilitator" |
| **H2** (Section title) | `48px` | `800` | `48px` (1em) | `normal` | Main section headings, centered |
| **H3** (Sub-section) | `36px` | `800` | `36px` | `normal` | Feature section titles, trainer names |
| **H4** (Card title) | `28px` | `700` | `28px` | `normal` | Day schedule card titles, card headings |
| **Category label** | `13-15px` | `700` | Tight | `-0.3px` | ALL CAPS, e.g., "IN-PERSON TRAINING PROGRAM", "CORE TOPICS", "DAY 1 OF 5" |
| **Body (large)** | `20-22px` | `500` | `1.5-1.6em` | `normal` | Hero description, section intros |
| **Body (default)** | `16-18px` | `500` | `1.5em` | `normal` | Card descriptions, feature text, FAQ items |
| **Body (small)** | `14-15px` | `400-500` | `1.4em` | `-0.3px` | Meta info, fine print, labels |
| **Nav links** | `15px` | `400-700` | `18px` | `-0.3px` | Demi weight; color: `#333333` |

### Text Styling Conventions

- **Hero subtitle**: First phrase bold (`fontWeight: 700`), rest regular (`500`), e.g., "**Our transformational 5-day training bootcamp** where you'll learn..."
- **Yellow highlight text**: Key phrases use `background-color: #FFF200` as a text highlighter effect, e.g., "make better decisions." and "less conflict." This is used sparingly for emphasis on key benefit phrases.
- **Italic emphasis in headings**: Specific words within headings use Bold Italic for dramatic flair, e.g., "In-Person — *Incredible!*", "Turned into *Days* of Learning"
- **Section intros**: Centered, `max-width: 800px`, slightly larger body text

---

## 4. Layout & Spacing

### Page Structure

The page uses a single-column centered layout with full-width background color sections:

```
[Navbar]                    — white bg, full-width, fixed top
[Hero Section]              — yellow bg (#FFF200)
[Details Row]               — light gray bg (#FAFAFA)
[CTA Block]                 — white bg, centered
[Features Grid]             — white bg
[In-Person Section]         — white bg, centered text + photo strip
[Testimonials]              — white bg, social embed cards
[Schedule Section]          — white bg, day cards
[Join Top 1%]               — yellow bg (#FFF200)
[ECS Section]               — black bg (#000000), white text
[Logo Strip]                — white bg, scrolling logos
[Who Is It For]             — yellow bg (#FFF200), white cards
[Quote Carousel]            — full-bleed photo background
[Why Facilitation]          — white bg, stat cards
[Facilitators Section]      — white bg, 2x2 grid photos + text
[Edu-Tainment]              — white bg, photo strip
[Trainers]                  — white bg, profile cards
[Training Dates]            — black bg (#000000), white text
[Contact / Waitlist]        — black bg, side-by-side white cards
[Satisfaction Guarantee]    — white bg, centered
[FAQ]                       — white bg, accordion
[Footer]                    — white bg
```

### Content Widths

| Context | Max Width | Usage |
|---------|-----------|-------|
| Outer container | `1500px` | Maximum page content width |
| Content container | `1060-1280px` | Main content area for grids, cards |
| Text content | `750-900px` | Centered paragraphs, section intros |
| Narrow text | `500-700px` | FAQ block, policy text |

### Spacing

| Element | Value | Notes |
|---------|-------|-------|
| Section vertical padding | `60-100px` | Top and bottom of each full-width section |
| Section inner padding | `30px` | Left/right padding within sections |
| Between heading and body | `20-30px` | After H2/H3 before paragraph text |
| Between body and CTA | `30-40px` | Space before buttons |
| Card gap (grid) | `20-30px` | Between cards in a row |
| Card internal padding | `30-40px` | Inside cards |

---

## 5. Component Library

### 5.1 Navigation Bar

- **Position**: Fixed at top (sticky)
- **Background**: White (`#FFFFFF`)
- **Height**: ~60px
- **Logo**: Left-aligned — "facilitator.com" in bold black + yellow "by AJ&Smart" badge
- **Links**: Right-aligned, `15px`, `Avenir Next LT Pro Demi`, color `#333333`
- **CTA button**: "Get in Touch" — outlined pill button, `border: 1px solid #000`, `border-radius: 999px`, no fill

### 5.2 Hero Section

- **Background**: Full-width `#FFF200` (Facilitator Yellow)
- **Layout**: Left-aligned text (not centered), max-width container
- **Elements top-to-bottom**:
  1. Category label: ALL CAPS, small bold text (`13px`, weight 700), e.g., "IN-PERSON TRAINING PROGRAM"
  2. H1 title: `88px` Extra Bold
  3. Subtitle paragraph: Mixed bold/regular text, `~22px`
  4. Feature tags: Small pill badges (e.g., "In-Person", "Online Coaching", "Video Course") with icons, separated by bullet dots
  5. Embedded video with rounded corners (`border-radius: 16px`)

### 5.3 Details Info Bar

- **Background**: `#FAFAFA` (very light gray)
- **Border radius**: `16px`
- **Layout**: 4-column grid
- **Columns**: Duration | Locations | Price | Certification
- **Column header**: Bold, `~16px`, weight 700
- **Column value**: Regular, `~16px`, weight 400-500

### 5.4 Primary CTA Button ("Check available dates")

- **Background**: `#000000` (solid black)
- **Text color**: White
- **Border radius**: `999px` (full pill shape)
- **Padding**: `25px 40px` (tall, generous)
- **Font**: `Avenir Next LT Pro Bold`, `~18-20px`
- **Text transform**: None (sentence case)
- **Hover**: Likely slight opacity or scale change
- **Display**: `inline-flex`, centered

### 5.5 Secondary CTA / Text Link ("Download Brochure")

- **Style**: Text link with download icon preceding text
- **Font weight**: Bold (700)
- **Color**: Black
- **Icon**: Download/arrow-down circle icon
- **No background, no border**

### 5.6 Outline Button ("Get in Touch" / "Learn more about ECS")

- **Background**: Transparent (or white)
- **Border**: `1px solid #000000` (black outline)
- **Border radius**: `999px` (pill)
- **Text**: Black, bold
- **Padding**: `15-20px 30-40px`

### 5.7 Yellow Submit Button ("Submit" on forms)

- **Background**: `#FFF200` (Facilitator Yellow)
- **Text**: Black, bold
- **Border radius**: `999px` (pill)
- **Full width** within its form container
- **Padding**: `15-20px`

### 5.8 Feature/Icon Grid (3-column)

- **Layout**: 3 columns, evenly spaced
- **Each item**: Icon on top, bold title below, small description text
- **Icons**: Custom illustrated icons with yellow (`#FFF200`) fill and black outlines
- **Title**: Bold, `~18-20px`, centered
- **Description**: Regular, `~15px`, centered, color `#333`

### 5.9 Day Schedule Card

- **Layout**: Two-column — left card (pastel bg) + right "What you'll learn" list
- **Card background**: Unique pastel per day (see Color section above)
- **Card border-radius**: `16px`
- **Card padding**: `30-40px`
- **Card content stack**:
  1. Day label: ALL CAPS, small, bold, e.g., "DAY 1 OF 5 • 4pm – 7pm"
  2. Title: Bold H4, e.g., "Orientation Evening"
  3. Description paragraph
  4. "CORE TOPICS" / "CORE ACTIVITIES" label: ALL CAPS, small, bold
  5. Topic tags: Gray pill badges (`background: rgba(0,0,0,0.08)`, `border-radius: 999px`, `padding: 8px 16px`)
- **Right column**: "What you'll learn:" bold heading + bulleted list

### 5.10 Stat Cards (Why Facilitation)

- **Background**: `#000000` (black)
- **Text**: White
- **Border radius**: `16px`
- **Layout**: 4-column row
- **Card content**:
  1. Large stat number/text: Bold, `~32-36px` (e.g., "$100 Million", "65%")
  2. Description: Regular, `~14px`
  3. Source attribution: Small, `~12px`, lighter opacity

### 5.11 Testimonials / Social Embed Cards

- **Style**: LinkedIn post-style embedded cards
- **Background**: White
- **Border**: Light shadow / subtle border
- **Border radius**: `8-12px`
- **Layout**: 2-column masonry-style grid
- **Content**: Profile photo, name, title, post text, images

### 5.12 Quote Carousel / Full-Bleed Image Section

- **Layout**: Full-viewport-width background image
- **Overlay**: Dark gradient/overlay for text readability
- **Quote text**: White, bold, `~36-48px`
- **Attribution**: White, regular, `~16px`, name + title
- **Navigation**: Left/right arrow buttons on edges

### 5.13 Photo Strip / Image Gallery

- **Layout**: Horizontal row of images spanning full width (edge-to-edge)
- **Image spacing**: `15-20px` gap
- **Image border-radius**: `8-12px`
- **Images**: Action shots, candid photos of training in progress

### 5.14 Profile / Trainer Cards

- **Layout**: 2-column grid
- **Card background**: White with subtle shadow/border
- **Border radius**: `16px`
- **Profile image**: Circular (`border-radius: 50%`), ~120px diameter, centered, with thin border
- **Name**: Bold
- **Bio**: Regular text, centered

### 5.15 Training Date Card (Upcoming)

- **Background**: White card on black section
- **Border**: Yellow (`#FFF200`) thick border highlight
- **Border radius**: `16px`
- **Layout**: 3-column within card — image | details | price+CTA
- **Details**: Title (bold), location with pin icon, date with calendar icon
- **Price**: Large bold text
- **CTA**: "Buy your ticket" — yellow pill button

### 5.16 Training Date Card (Past)

- **Background**: White card on black section
- **Border radius**: `16px`
- **Layout**: Vertical stack — image (with "EVENT OVER" overlay), title, location, date, price
- **Overlay**: Yellow banner angled across image reading "EVENT OVER"
- **Text**: Muted/grayed style

### 5.17 Contact & Waitlist Side-by-Side

- **Layout**: 2-column on black background
- **Left card**: "Have questions? Speak with our Admissions Team!" + "Schedule a Call" outlined button
- **Right card**: Waitlist form — name, email, dropdown, yellow submit button
- **Cards**: White background, `border-radius: 16px`, `padding: 40px`

### 5.18 Form Inputs

- **Background**: White
- **Border**: `1px solid #E5E5E5`
- **Border radius**: `8px`
- **Padding**: `12-15px`
- **Font**: `Avenir Next LT Pro Medium`, `~16px`
- **Placeholder color**: Gray (`#999` approx)
- **Label**: Bold, `~14px`, above input

### 5.19 FAQ Accordion

- **Container**: White card with subtle border, `border-radius: 16px`
- **Max-width**: `~700px`, centered
- **Item separator**: `1px solid #E5E5E5`
- **Question text**: Medium weight, `~16px`
- **Toggle icon**: `+` symbol on left side
- **Expand/collapse**: Smooth animation

### 5.20 Logo Strip (Client Marquee)

- **Layout**: Two rows of logos scrolling horizontally (marquee animation)
- **Background**: White
- **Logo style**: Grayscale or black, uniform height (~40px)
- **Spacing**: ~80-100px between logos
- **Companies include**: Google, Uber, Netflix, P&G, Airbnb, IKEA, Slack, etc.

### 5.21 Footer

- **Background**: White
- **Layout**: Logo (left) + 3-column link grid (right)
- **Columns**: About Us | Legal | Social
- **Font**: `14-15px`, regular weight
- **Copyright**: `"© 2026 AJ&Smart. All Rights Reserved."`

---

## 6. Iconography & Visual Elements

### Icons
- **Feature icons**: Custom illustrated, line-art style with yellow (#FFF200) fill areas and black (#000000) outlines
- **UI icons**: Simple, minimal — download arrows, location pins, calendar icons, play buttons
- **Social icons**: YouTube, Instagram, LinkedIn in the footer

### Decorative Elements
- **Yellow squiggle/underline**: A hand-drawn style wavy yellow underline used beneath emphasis words (e.g., under "Incredible!")
- **Yellow sunburst/starburst**: Radiating yellow dashes around "Facilitators!" text
- **Hand-drawn arrows**: Black, sketch-style arrows pointing toward key content
- **Yellow "by AJ&Smart" badge**: Small yellow rectangle behind "by AJ&Smart" text in the logo

### Image Treatment
- **Border radius**: `12-16px` on contained images
- **Full-bleed images**: No border radius, edge-to-edge
- **Circular portraits**: `border-radius: 50%` with thin border for trainer photos
- **Video embeds**: `border-radius: 16px`, centered, with centered play button overlay

---

## 7. Section Background Pattern

The page alternates between these background colors to create visual rhythm:

```
Yellow  → White → White → White → White → Black → White → Yellow →
Photo → White → White → White → White → Black → Black → White → White → White
```

**Key rules:**
- Yellow sections are used for high-energy, attention-grabbing moments (hero, exclusivity, target audience)
- Black sections are used for premium/serious moments (methodology, training dates, contact)
- White sections are the default for content-heavy areas
- Never have two yellow sections adjacent
- Black sections often come in pairs

---

## 8. Responsive Behavior Notes

While primarily analyzed at desktop width (~1500px), the design follows these responsive patterns:
- Grids collapse from 3/4 columns to 2 to 1 on smaller screens
- H1 scales down significantly on mobile (~40-50px)
- The nav converts to a hamburger menu on mobile
- Photo strips may become horizontal scrollable on mobile
- Cards stack vertically on narrow screens
- Section padding reduces proportionally

---

## 9. Voice & Copy Style

While not a visual style, the copy style is integral to the page feel:

- **Tone**: Energetic, confident, casual-professional
- **Headline pattern**: Short, punchy statements often with italicized emphasis words
- **Exclamation marks**: Used liberally in headings for energy ("Incredible!", "Facilitators!", "Edu-Tainment!")
- **Numbers**: Used prominently as social proof ("35,000 people", "100s of companies", "Top 1%", "14 years")
- **Questions**: Section headings often use questions ("What's included?", "Who's This Training For?", "Why facilitation?", "Still have questions?")
- **Contractions**: Yes — "We've", "you'll", "it's" — keeps it friendly
- **Bold key phrases**: Within body text, key phrases are bolded for scanning

---

## 10. Implementation Notes for Claude

When generating pages in this style:

1. **Use Squarespace-compatible markup** if building for Squarespace, or clean semantic HTML otherwise
2. **Font loading**: Import Avenir Next LT Pro via `@font-face` or use system fallback `"Avenir Next", system-ui, sans-serif`
3. **Yellow is ALWAYS `#FFF200`** — never use a different yellow
4. **Buttons are always pills** — `border-radius: 999px`
5. **Cards always have** `border-radius: 16px`
6. **Content should be centered** with `max-width` containers (800-1060px) and `margin: 0 auto`
7. **Section padding should be generous** — minimum `60px` top/bottom
8. **Text hierarchy is critical**: Use the exact type scale — massive H1, big H2, clear size difference between heading levels
9. **Alternate section backgrounds** for visual rhythm per the pattern in Section 7
10. **Yellow highlight text** should be used sparingly — only on 2-3 key benefit phrases per page
11. **ALL CAPS labels** should be small (`13px`), bold, with slight negative letter-spacing
12. **Images should feel candid and energetic** — not corporate stock photos
13. **White cards on colored backgrounds** create contrast and visual depth
14. **The page is long and scroll-heavy** — this is intentional. Each section tells part of the story.

---

*Style guide generated from analysis of https://facilitator.com/full-stack-facilitator*
*Last analyzed: February 2026*
