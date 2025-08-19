# ⚽ ScoutLay — Trading Esportivo

App web que lista jogos reais da Football-Data.org e aplica filtros para estratégias **Lay** (Lay 1-1, Lay 1-0, Lay 0-1 e Lay Goleada).

---

## 🚀 Deploy rápido (1 clique)

### Backend (Render)
Clique abaixo para subir o **backend (API)**:

[![Deploy to Render](https://render.com/images/deploy-to-render-button.svg)](https://render.com/deploy?repo=https://github.com/AndersonPontess/scoutlay)

Após o deploy no Render, configure a variável de ambiente:
- `FOOTBALL_DATA_API_KEY` = `778e8b40dac34e9c9aa6fd24fb589b25`

---

### Frontend (Vercel)
Clique abaixo para subir o **frontend (site)**:

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/AndersonPontess/scoutlay&root-directory=frontend)

Durante o deploy no Vercel, configure a variável de ambiente:
- `VITE_API_BASE` = URL pública do backend no Render  
  (exemplo: `https://scoutlay-backend.onrender.com`)

---

## 📖 Passos simples
1. Faça upload deste projeto no repositório: [https://github.com/AndersonPontess/scoutlay](https://github.com/AndersonPontess/scoutlay)  
2. Abra o `README.md` no GitHub.  
3. Clique no botão **Deploy to Render** → aguarde alguns minutos → copie a URL do backend.  
4. Clique no botão **Deploy with Vercel** → cole a URL do backend quando pedir `VITE_API_BASE`.  
5. Pronto 🎉 Seu site estará online!

---

## 📝 Observação
- A API gratuita Football-Data.org tem **limite de requisições por minuto** e nem sempre traz odds completas.  
- O backend usa odds/estatísticas **simuladas** como fallback para sempre mostrar sinais.  
- Para sinais mais robustos, no futuro podemos integrar com APIs pagas (Sportradar, Betfair Exchange).  
