<div align="center">

# 🧹 Stop Using BiomeJS the Wrong Way

**Advanced lint and formatting configuration with Biome.**

![Biome](https://img.shields.io/badge/Biome-60A5FA?style=for-the-badge&logo=biome&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white)
![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)

[![YouTube](https://img.shields.io/badge/Watch_on_YouTube-FF0000?style=for-the-badge&logo=youtube&logoColor=white)](https://www.youtube.com/watch?v=3kvXuBoVTXI)
[![DevClub PRO](https://img.shields.io/badge/Channel-DevClub_PRO-FF0000?style=for-the-badge&logo=youtube&logoColor=white)](https://www.youtube.com/@DevClubPRO)

</div>

---

## 🎬 Video

This repository accompanies a video from the **[DevClub PRO](https://www.youtube.com/@DevClubPRO)** channel:

<div align="center">

<a href="https://www.youtube.com/watch?v=3kvXuBoVTXI" title="Stop Using BiomeJS the Wrong Way | Go Pro">
  <img src="https://img.youtube.com/vi/3kvXuBoVTXI/maxresdefault.jpg" alt="Stop Using BiomeJS the Wrong Way | Go Pro" width="720" />
</a>

**▶️ [Stop Using BiomeJS the Wrong Way | Go Pro](https://www.youtube.com/watch?v=3kvXuBoVTXI)**

<sub>🇧🇷 The video is in Brazilian Portuguese.</sub>

</div>

## 📖 About

This project goes beyond the basics of **Biome**: a custom `biome.json` with lint rules deliberately turned on and off, and a finely tuned formatter. The sample code (`src/index.ts`) intentionally triggers rules such as `noForEach`, `noStaticOnlyClass` and `noExplicitAny`.

## 🎯 What you’ll learn

- Understand the linter rule groups (`complexity`, `suspicious`...)
- Turn off specific rules when they don’t make sense for your project
- Configure the formatter: quotes, semicolons, `lineWidth`, indentation, `bracketSameLine`
- Use Biome with TypeScript

## ⚙️ Configuration used

```json
{
  "linter": {
    "enabled": true,
    "rules": {
      "recommended": true,
      "complexity": {
        "noForEach": "off",
        "noUselessConstructor": "off",
        "noStaticOnlyClass": "off"
      },
      "suspicious": { "noExplicitAny": "off" }
    }
  },
  "javascript": {
    "formatter": {
      "quoteStyle": "single",
      "semicolons": "always",
      "lineWidth": 80,
      "indentStyle": "space",
      "indentWidth": 2
    }
  }
}
```

## 💻 Biome commands

```bash
npx @biomejs/biome check ./src          # check
npx @biomejs/biome check --write ./src  # fix
```

## 🚀 Getting started

> Prerequisite: [Node.js](https://nodejs.org/) 18+

```bash
# 1. Clone the repository
git clone https://github.com/agustinhopneto/yt-biome-lint.git
cd yt-biome-lint

# 2. Install the dependencies
npm install

# 3. Run the example
npm start
```

## 🛠️ Tech stack

![Biome](https://img.shields.io/badge/Biome-60A5FA?style=for-the-badge&logo=biome&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white)
![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)

---

<div align="center">

Enjoyed it? Leave a ⭐ on the repo and subscribe to the channel!

[![Subscribe](https://img.shields.io/badge/Subscribe-DevClub_PRO-FF0000?style=for-the-badge&logo=youtube&logoColor=white)](https://www.youtube.com/@DevClubPRO?sub_confirmation=1)

Made with 💙 by **[Agustinho Neto](https://github.com/agustinhopneto)**

</div>
