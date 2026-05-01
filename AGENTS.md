# AGENTS.md

## Project

This is a frontend prototype for a Tencent PCG campus AI product competition.

Product name: 有应  
Slogan: 发一张图，让朋友入画。

The demo shows a QQ group chat AI visual response module. A user sends a cafeteria meal photo. The AI detects the empty opposite seat. A friend clicks the empty seat and chooses “坐你对面”. The system shows an echo image where a second meal tray naturally appears across the table.

## Main Goal

Build a polished single-page React demo, not a generic AI tool page.

The page must feel like a lightweight QQ group chat feature prototype.

## Tech Stack

- Vite
- React
- CSS or Tailwind-like utility classes
- Framer Motion is allowed
- No backend
- No database
- No real image generation API
- Use local assets from public/

## Required Assets

Use these files from public/:

- meal_input.jpg
- meal_echo.jpg
- meal_compare.jpg
- meal_mask.png
- prompt.txt

## Required User Flow

1. Landing state shows product name 有应 and slogan 发一张图，让朋友入画。
2. User clicks “开始 Demo”.
3. QQ group chat simulator shows a user message: “开饭。”
4. The original meal image appears.
5. The opposite empty seat has a subtle warm breathing glow.
6. User clicks the glowing area.
7. A small menu appears with only one action: “坐你对面”.
8. User clicks “坐你对面”.
9. A short generating state appears: “正在把朋友的回应长进画面……”
10. Echo image fades in.
11. Group message appears: “林同学入画：坐你对面。”
12. Bottom comparison section highlights original image, action, echo image.
13. Final sentence appears: “普通社交让朋友看见你，有应让朋友进入这一刻。”

## Visual Style Rules

Must be:
- restrained
- warm
- clean
- realistic
- close to QQ group chat
- campus-life oriented
- product-demo polished

Avoid:
- sci-fi HUD
- scan lines
- radar effects
- code rain
- black detection overlays
- loneliness diagnosis
- sticker-like UI
- meme style
- overdesigned AI dashboard

## Layout

Desktop layout:
- Left: judge explanation panel
- Right: phone-like QQ group chat simulator
- Bottom: before/action/after comparison panel

Mobile layout:
- Stack sections vertically
- Phone simulator first or near top
- Keep interaction usable

## Components

Create these components:

- App.jsx
- components/PhoneMock.jsx
- components/ChatImage.jsx
- components/AffordanceGlow.jsx
- components/EntryMenu.jsx
- components/EchoImage.jsx
- components/JudgePanel.jsx
- components/ComparePanel.jsx

## State Machine

Use this flow:

idle
→ user_sent_image
→ affordance_detected
→ friend_click_empty_seat
→ friend_choose_sit_across
→ generating_echo
→ echo_done

## Copywriting

Use Chinese UI copy.

Product name: 有应  
Slogan: 发一张图，让朋友入画。  
Main action: 坐你对面  
Final line: 普通社交让朋友看见你，有应让朋友进入这一刻。  
Core defense line: 不是贴纸，是空间回应。

## Implementation Rules

- Do not add login.
- Do not add backend.
- Do not add multiple scenes.
- Do not add multiple actions.
- Do not use real API.
- Do not use QR codes.
- Do not mention “孤独检测”.
- Keep animations subtle.
- Make the demo stable and easy to record.