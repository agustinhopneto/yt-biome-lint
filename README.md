<div align="center">

# 🧹 Pare de usar o BiomeJS do jeito errado

**Configurações avançadas de lint e formatação com o Biome.**

![Biome](https://img.shields.io/badge/Biome-60A5FA?style=for-the-badge&logo=biome&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white)
![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)

[![YouTube](https://img.shields.io/badge/Assista_no_YouTube-FF0000?style=for-the-badge&logo=youtube&logoColor=white)](https://www.youtube.com/watch?v=3kvXuBoVTXI)
[![DevClub PRO](https://img.shields.io/badge/Canal-DevClub_PRO-FF0000?style=for-the-badge&logo=youtube&logoColor=white)](https://www.youtube.com/@DevClubPRO)

</div>

---

## 🎬 Vídeo

Este repositório acompanha o vídeo do canal **[DevClub PRO](https://www.youtube.com/@DevClubPRO)**:

<div align="center">

<a href="https://www.youtube.com/watch?v=3kvXuBoVTXI" title="Pare de usar o BiomeJS do jeito errado | Seja Pro">
  <img src="https://img.youtube.com/vi/3kvXuBoVTXI/maxresdefault.jpg" alt="Pare de usar o BiomeJS do jeito errado | Seja Pro" width="720" />
</a>

**▶️ [Pare de usar o BiomeJS do jeito errado | Seja Pro](https://www.youtube.com/watch?v=3kvXuBoVTXI)**

</div>

## 📖 Sobre

Neste projeto vamos além do básico com o **Biome**: um `biome.json` personalizado, com regras de lint ligadas e desligadas de forma consciente e um formatter configurado nos detalhes. O código de exemplo (`src/index.ts`) dispara de propósito regras como `noForEach`, `noStaticOnlyClass` e `noExplicitAny`.

## 🎯 O que você vai aprender

- Entender os grupos de regras do linter (`complexity`, `suspicious`...)
- Desligar regras específicas quando elas não fazem sentido para o seu projeto
- Configurar o formatter: aspas, ponto e vírgula, `lineWidth`, indentação, `bracketSameLine`
- Usar o Biome com TypeScript

## ⚙️ Configuração usada

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

## 💻 Comandos do Biome

```bash
npx @biomejs/biome check ./src          # verifica
npx @biomejs/biome check --write ./src  # corrige
```

## 🚀 Como rodar

> Pré-requisito: [Node.js](https://nodejs.org/) 18+

```bash
# 1. Clone o repositório
git clone https://github.com/agustinhopneto/yt-biome-lint.git
cd yt-biome-lint

# 2. Instale as dependências
npm install

# 3. Execute o exemplo
npm start
```

## 🛠️ Tecnologias

![Biome](https://img.shields.io/badge/Biome-60A5FA?style=for-the-badge&logo=biome&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white)
![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)

---

<div align="center">

Curtiu? Deixa um ⭐ no repositório e se inscreva no canal!

[![Inscreva-se](https://img.shields.io/badge/Inscreva--se-DevClub_PRO-FF0000?style=for-the-badge&logo=youtube&logoColor=white)](https://www.youtube.com/@DevClubPRO?sub_confirmation=1)

Feito com 💙 por **[Agustinho Neto](https://github.com/agustinhopneto)**

</div>
