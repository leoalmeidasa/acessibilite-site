# Site Acessibilitê

Site estático (HTML/CSS/JS), sem banco de dados. Hospedagem gratuita no GitHub Pages (ou Cloudflare Pages).

## Editar
- Textos: `index.html` (seção Contato e "Sobre").
- Visual: `style.css`. Imagens: pasta `img/`.

## Testar localmente
    python3 -m http.server 8000   # e abra http://localhost:8000

## Publicar (Cloudflare Pages, grátis)
Opção A — painel:
1. dash.cloudflare.com → Workers & Pages → Create → Pages → "Upload assets".
2. Nome do projeto: `acessibilite` → arraste esta pasta → Deploy.
3. Aba "Custom domains" → adicionar `acessibilite.com.br` e `www.acessibilite.com.br`
   (o DNS já está no Cloudflare, então a ligação é automática).

Opção B — terminal:
    npx wrangler login
    npx wrangler pages deploy . --project-name acessibilite

Para atualizar, repita o upload/deploy.

## Publicar (GitHub Pages, grátis)
1. Repositório público `acessibilite-site` → Settings → Pages → Source: branch `main`, pasta `/ (root)`.
2. Depois de configurar o DNS (passo 3), em Settings → Pages → Custom domain, informe `acessibilite.com.br`.
3. No DNS do Cloudflare:
   - `CNAME` `@` → `<usuario>.github.io` (Cloudflare faz "flattening" no domínio raiz)
   - `CNAME` `www` → `<usuario>.github.io`
   - Deixe a nuvem **cinza** (DNS only) até o GitHub emitir o certificado HTTPS.
4. Em Settings → Pages, marque "Enforce HTTPS".
