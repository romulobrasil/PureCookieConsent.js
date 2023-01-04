<p align="center">
  <a href="https://romulobrasil.com" target="_blank" title="Acessar o site Rômulo Brasil">
  <img width="200" height="146" src="https://romulobrasil.com/img/logo.png"/>
  </a>
</p>

# Pure Cookie Consent JS (purecookieconsent.js)

Outro plugin da série Pure com Javacript Puro. O da vez é um plugin simples que cria um pequeno modal para informar a visitante do seu site que está sendo utilizado os cookies com as informações dele.

Assim preparendo o seu site para os requisitos de consentimento de cookies relacionados ao LGPD, GDPR, CCPA, DSGVO, lei de cookies da UE e requisitos de aviso com esse plugin.

Assim, fica tudo dentro da Lei Geral de Proteção de Dados Pessoais, conhecida pela sigla LGPD, no caso do Brasil.

No plugin você pode personalizar a mensagem padrão, a label do botão e caso queira adicionar ao seu estilo CSS também.

Temos três pararametros que não são obrigatórios para o funcionamento do plugin, pois já tem tudo no padrão. Segue abaixo os parametros que podemos utilizar, tudo dentro de um objeto.

```
PureCookieConsent.show({
  'txt': 'Your New Text Here',
  'btnTxt': 'I accept!',
  'style': true,
});
```

### Abaixo falaremos de cada um deles:

#### 1. txt

Texto personalizado de acordo com a sua preferência, o texto padrão é esse logo abaixo. <br>
_Este site usa cookies para garantir a melhor experiência do usuário. Ao continuar navegando no site, você concorda com o uso de cookies._

#### 2. btnTxt

Label personalizado do botão de aceito. O padrão está logo abaixo. <br>
_Eu concordo_

#### 3. style

O plugin já tem uma estilização de CSS padrão, caso não queira utilizar, basta colocar _style: false_.
Caso queira utilizar as class dos elementos para facilitação da estilização do CSS, são elas:

1. _pure-cookie-consent_ - div principal, a barra propriamente dita;
1. _pure-cookie-consent_txt_ - texto da mensagem;
1. _pure-cookie-consent_btn_ - botão de aceito;

Lembrando que para o plugin funcionar bastar chamar ele no HTML e instância-lo como mostrado abaixo:

```
<script src="PureCookieConsent.js"></script>
<script>
  PureCookieConsent.show({
    'txt': 'Your New Text Here',
    'btnTxt': 'I accept!',
    'style': true,
  });
</script>
```

### Acesse: <https://romulobrasil.com>
