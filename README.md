# site-ianes — Portal institucional IANES

Site estático (HTML/CSS/JS, sem framework) do **Instituto Ana Nery de Educação e Saúde**.
Mobile-first e totalmente responsivo (testado em 360px, iPhone 13, iPad e desktop).

## Páginas
`index.html` (Início) · `quem-somos.html` · `saude.html` · `educacao.html` · `governanca.html` ·
`transparencia.html` · `trabalhe-conosco.html` · `contato.html` · `privacidade.html` (LGPD)

Textos marcados com **[TEXTO PROVISÓRIO]** (destaque amarelo) devem ser substituídos pelo conteúdo aprovado.

## Publicar para validação (GitHub Pages — gratuito)
1. Settings → Pages → *Deploy from a branch* → `main` / `(root)` → Save.
2. Em ~1 min o site fica em `https://inaciogambatto.github.io/site-ianes/`.

## Antes da publicação oficial
- Remover a faixa "Versão de validação" e a meta `noindex` de todas as páginas.
- Configurar o formulário de contato (ex.: Formspree/Web3Forms) trocando `action="#"` em `contato.html`.
- Publicar PDFs em `assets/docs/` e listá-los em `transparencia.html`.

## Apontar o domínio ianes.org.br
1. Criar o arquivo `CNAME` com o conteúdo `www.ianes.org.br`.
2. No DNS (Registro.br ou Cloudflare): `CNAME www → inaciogambatto.github.io` e registros `A` do domínio raiz para
   185.199.108.153, 185.199.109.153, 185.199.110.153, 185.199.111.153.
3. Em Settings → Pages, informar o domínio e marcar *Enforce HTTPS*.
