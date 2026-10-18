# Fotos dos membros

As fotos dos 5 integrantes ficam nesta pasta, com o primeiro nome de cada um:

```
mariany.png
murilo.png
nuria.png
pedro.png
eduardo.png
```

- Formato: quadrado (recomendado 300x300px ou 400x400px), `.jpg` / `.png` / `.webp`.
- A exibicao usa `object-fit: cover`, entao o recorte e automatico.
- Se o arquivo nao existir, a pagina gera automaticamente um avatar com as
  iniciais do membro (gradiente azul-marinho -> azul) - sem link quebrado.
- Para trocar o caminho de cada foto, edite o campo `photo` no array `MEMBERS`
  no `script.js`.
- O tamanho de exibicao do quadrado de foto e controlado pela variavel
  `--photo-h` no `:root` do `styles.css`, independente da altura da linha (`--row-h`).
