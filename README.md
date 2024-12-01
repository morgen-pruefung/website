# Morgen-Pruefung.de Website

## Tech Stack

- TypeScript
- Vue.js
- Vuetify

## Build and run

```bash
npm install
npm run build
npm run serve
```

or run in development mode:

```bash
npm install
npm run dev
```

## Docker

Build the image:
    
```bash
docker build -t mp-frontend .
```

Run the container:

```bash
docker run -p 4343:80 mp-frontend
```

Open the website in your browser: [http://localhost:4343](http://localhost:4343)