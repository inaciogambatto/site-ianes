# site-ianes — Portal institucional IANES

Site do **Instituto Ana Nery de Educação e Saúde**, feito com **Jekyll** (montado automaticamente e de graça pelo GitHub Pages)
e editável pelo painel **Pages CMS** (https://app.pagescms.org). Mobile-first e totalmente responsivo.

- Para quem edita conteúdo: veja **[GUIA-DO-EDITOR.md](GUIA-DO-EDITOR.md)**.
- Configuração do painel: `.pages.yml`.

## Onde fica cada conteúdo
| Conteúdo | Arquivo |
|---|---|
| Dados institucionais, contatos, modo de validação | `_data/site.yml` |
| Textos de Início, Quem Somos, Saúde, Educação, Governança | `_data/inicio.yml`, `_data/quem_somos.yml`, `_data/saude.yml`, `_data/educacao.yml`, `_data/governanca.yml` |
| Documentos da Transparência | `_documentos/*.md` (PDFs em `assets/docs/`) |
| Editais | `_editais/*.md` |
| Categorias da Transparência e menu | `_data/categorias.yml`, `_data/menu.yml` |
| Política de Privacidade | `privacidade.md` |
| Layout (cabeçalho, rodapé), componentes | `_layouts/`, `_includes/` |
| Estilos e scripts | `assets/css/style.css`, `assets/js/main.js` |

## Ativar o painel administrativo (uma vez)
1. Acesse https://app.pagescms.org e entre com a conta GitHub **inaciogambatto**.
2. Instale/autorize o app do Pages CMS no repositório **site-ianes**.
3. Abra o projeto → **Settings → Collaborators** → convide o e-mail de cada editor da IANES.
   Os editores entram só com o e-mail (não precisam de conta GitHub).

## Publicação (GitHub Pages)
Settings → Pages → *Deploy from a branch* → `main` / `(root)`. Endereço provisório:
`https://inaciogambatto.github.io/site-ianes/`. Cada alteração no painel republica o site em ~1–2 min.

## Rodar localmente
```bash
gem install jekyll -v '~>3.10' kramdown-parser-gfm webrick
jekyll serve   # http://localhost:4000/site-ianes/
```

## Apontar o domínio ianes.org.br
1. Em `_config.yml`: `url: https://www.ianes.org.br` e `baseurl: ""`.
2. Criar o arquivo `CNAME` com `www.ianes.org.br`.
3. DNS (Registro.br ou Cloudflare): `CNAME www → inaciogambatto.github.io` e registros `A` do domínio raiz para
   185.199.108.153, 185.199.109.153, 185.199.110.153, 185.199.111.153.
4. Settings → Pages: informar o domínio e marcar *Enforce HTTPS*.

## Antes da publicação oficial
- Desligar **Modo de validação** no painel (remove a faixa e o `noindex`).
- Configurar o formulário de contato (ex.: Formspree/Web3Forms) trocando `action="#"` em `contato.html`.
- Substituir todos os trechos `[PROVISÓRIO]` e remover os itens `[EXEMPLO]`.
