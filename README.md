# 🚀 TaskForce 9000

**TaskForce 9000** er en futuristisk, mørk og glødende gjøremålsapp laget med React og Vite.  
Appen kombinerer funksjonell produktivitet med et stilrent, sci-fi-inspirert brukergrensesnitt.  
Du kan legge til oppgaver, dra og slippe dem mellom ulike statuser, og oppleve en belønningsmekanikk når du rydder unna!

---

## 🔧 Funksjoner

- **Legg til nye oppgaver** med tittel, beskrivelse og status
- **Tre kolonner** for statuser: Ikke påbegynt, I gang og Fullført
- **Dra og slipp** oppgaver mellom kolonner med full støtte fra `@hello-pangea/dnd`
- **Lagring i localStorage** – husker oppgavene dine mellom økter
- **Rydd fullførte oppgaver** med konfettianimasjon 🎉
- **Tøm alle oppgaver** med ett klikk (og bekreftelse)
- **Dark mode design** med moderne stil og neon-elementer
- **Motivasjonsbelønning (kommer):** fullfør 5 oppgaver og få en quote
- **Animasjonsbakgrunn (kommer):** stjerneskudd, glow eller grid-effekter

---

## 🧪 Teknologi brukt

- [React 19](https://react.dev/)
- [Vite](https://vitejs.dev/)
- [CSS Modules](https://github.com/css-modules/css-modules)
- [@hello-pangea/dnd](https://github.com/hello-pangea/dnd) – drag and drop
- [canvas-confetti](https://www.npmjs.com/package/canvas-confetti) – konfettianimasjon
- HTML/CSS, localStorage og en solid dose neon

---

## 🧠 Hvordan jeg har jobbet

Jeg startet med en enkel JavaScript-versjon og planla en ny versjon med React og Vite.

https://marcus-kodehode.github.io/CRUDProject/

Deretter satte jeg opp en god filstruktur og begynte å bygge komponenter som `TaskForm`, `TaskList`, `TaskColumn` og `TaskCard`.

Stylingen ble gjort med `global.css` for felles stil og `css-modules` for komponent-spesifikke detaljer.  
Underveis implementerte jeg localStorage slik at oppgavene bevares, og etter hvert la jeg inn `drag-and-drop` med `@hello-pangea/dnd`.

Deretter fokuserte jeg på design: mørk bakgrunn, glow-effekter, fargede statuser og konfetti som belønning.  
Appen fikk navnet **TaskForce 9000** og en glødende tittel med animert gradient inspirert av 80-/90-talls sci-fi.

---

## 🧱 Prosjektstruktur

src/ ├── components/ │ ├── TaskForm/ │ ├── TaskList/ │ ├── TaskColumn/ │ └── TaskCard/ ├── styles/ │ └── global.css ├── App.jsx ├── main.jsx


---

## 📈 Neste steg

- 🔁 Fremdriftsindikator og progressbar
- 💬 Motivasjonsquote etter 5 fullførte oppgaver
- 🌌 Bakgrunnsanimasjoner (stjerner, neon grid eller glow-effekter)
- 📅 Mulighet for deadline/dato eller ukesoversikt
- 🧪 Kanskje backend-støtte og innlogging i fremtiden?

---

## 📸 Skjermbilde

> ![TaskForce9000 Preview](./src/assets/images/taskforce-9000.webp)

---

## ✍️ Laget av

Marcus @ Kodehode  
> *"Med lidenskap for mørke grensesnitt, glow-effekter og produktivitet med stil."*

---

## 📄 Lisens

Dette prosjektet er laget for læring og kreativ utfoldelse.  
Bruk gjerne koden, remix den og gjør den til din egen!

---

