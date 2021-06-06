import React from 'react';
import { Container, Content, Map, Table, Row, Column } from "./styles";
import './styles.css';

function App() {
  var ceps = [
    {logradouro:"Logradouro",cep:"CEP"},
    {logradouro:"Praça Camilo de Jesus Lima",cep:"45000-715"},
    {logradouro:"Rua lisboa",cep:"45000-580"},
    {logradouro:"Rua Laodiceia Gusmão",cep:"45000- 555"},
    {logradouro:"Praça Amélia Antunes Luz Spósito",cep:"45000-190"},
    {logradouro:"Avenida Crescêncio Silveira",cep:"45000-190"},
  ]
  return (
    <Container>
      <Content>
        <Map
          id="map-iframe"
          title="park-map-reference"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d964.1459806640788!2d-40.84242407084665!3d-14.848591999352792!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7463bb3f7e7228f%3A0x8ab95ea3f8e8e3a1!2sR.%20Laudic%C3%A9ia%20Gusm%C3%A3o%2C%20405%20-%20Centro%2C%20Vit%C3%B3ria%20da%20Conquista%20-%20BA%2C%2045000-555!5e0!3m2!1spt-BR!2sbr!4v1622994319777!5m2!1spt-BR!2sbr"
          loading="lazy"
        />
        <h1> Praça Camilo de Jesus Lima | 45000-715</h1>
        <p>
          Localizada no Centro de Vitória da Conquista - Bahia, a praça Camilo de Jesus Lima (CEP 45000-715) possui um grande fluxo de pessoas na prestação de serviços e compras além de ser ponto para chegada e partida para cidades vizinhas, como Barra do Choça. A praça se encontra no cruzamento de três logradouros muito importantes <a href="https://www.google.com/search?q=Av.+Cresc%C3%AAncio+Silveira&sxsrf=ALeKk03bNBC0XaADe9SximdJErLTuv7DDw%3A1622991729095&ei=ceO8YKKPBYbV1sQP1--xMA&oq=Av.+Cresc%C3%AAncio+Silveira&gs_lcp=Cgdnd3Mtd2l6EAMyAggmMgYIABAWEB4yBggAEBYQHjIGCAAQFhAeOgcIIxCwAxAnOgUIABCwAzoFCCYQsAM6BwgAELADEB5Q5ZAHWOWQB2CrlgdoAHAAeACAAdkFiAGZDZIBCTAuMS4zLjYtMZgBAKABAqABAaoBB2d3cy13aXrIAQbAAQE&sclient=gws-wiz&ved=0ahUKEwjii_Gro4PxAhWGqpUCHdd3DAYQ4dUDCA4&uact=5" target="_blank" rel="noreferrer">Av. Crescêncio Silveira</a>, <a href="https://www.google.com/search?q=rua+laodiceia+gusmao&oq=rua+laodiceia+gusmao&aqs=chrome..69i57.1249j0j7&sourceid=chrome&ie=UTF-8" target="_blank" rel="noreferrer">Rua Laudicéia Gusmão</a> e <a href="https://www.google.com/search?q=Rua+Lisboa&sxsrf=ALeKk01iYc26T6MQLykpwxGXxY38Y4ddxQ%3A1622991847938&ei=5-O8YJHROPjN1sQPlvmA-Ao&oq=Rua+Lisboa&gs_lcp=Cgdnd3Mtd2l6EAMyAggAMgIIADICCAAyAggAMgIIADICCAAyAggAMgIIADICCAAyAggAOgUIJhCwAzoHCAAQsAMQHlDrugFY67oBYOHAAWgDcAB4AIABkAGIAZgCkgEDMC4ymAEAoAECoAEBqgEHZ3dzLXdpesgBAsABAQ&sclient=gws-wiz&ved=0ahUKEwjR4Mbko4PxAhX4ppUCHZY8AK8Q4dUDCA4&uact=5" target="_blank" rel="noreferrer">Rua Lisboa</a>. Também possui proximidade com as praças <a href="https://www.google.com/search?q=Am%C3%A9lia+Antunes+Luz+Sp%C3%B3sito&sxsrf=ALeKk02R99Ad85ZfU4KTpQFFPi3JN3rE_w%3A1622991985717&ei=ceS8YMmhK7rb1sQP0daM4AM&oq=Am%C3%A9lia+Antunes+Luz+Sp%C3%B3sito&gs_lcp=Cgdnd3Mtd2l6EAMyBAgjECc6BQgAELADOgkIABCwAxAHEB5Q3YECWN2BAmCsjAJoA3AAeACAAc4BiAHOApIBBTAuMS4xmAEAoAECoAEBqgEHZ3dzLXdpesgBCsABAQ&sclient=gws-wiz&ved=0ahUKEwiJnqCmpIPxAhW6rZUCHVErAzwQ4dUDCA4&uact=5" target="_blank" rel="noreferrer">Amélia Antunes Luz Spósito</a> (localidada ao lado da Praça Camilo de Jesus Lima) e <a href="https://www.google.com/search?q=Pra%C3%A7a+Tancredo+Neves&sxsrf=ALeKk00ZYwSJdDHyaA2oG02sAhNlZuET_Q%3A1622991978777&ei=auS8YLneLr_K1sQPt_ShwAs&oq=Pra%C3%A7a+Tancredo+Neves&gs_lcp=Cgdnd3Mtd2l6EAMyBAgAEA0yBAgAEA0yBAgAEA0yBAgAEA0yBAgAEA0yBggAEAcQHjIGCAAQBxAeMgQIABANMgYIABAHEB4yBggAEAcQHjoFCAAQsAM6CwgAEMcBEK8BELADOgkIABCwAxAHEB46DgguELEDELADEMgDEJMCOggILhCwAxDIAzoHCCMQsAIQJzoECC4QDToKCAAQxwEQrwEQDUoFCDgSATFQ6xlY-iRg4SVoAXAAeACAAfoBiAGHCJIBBTAuNC4ymAEAoAEBqgEHZ3dzLXdpesgBDMABAQ&sclient=gws-wiz&ved=0ahUKEwi5u_iipIPxAhU_pZUCHTd6CLgQ4dUDCA4&uact=5" target="_blank" rel="noreferrer">Tancredo Neves</a> (Localidada no fim da Rua Lisboa).
        </p>
        <p>
          Um fato interessante é que quase todos moradores de Vitória da Conquista conhecem a praça e passam por ela constantemente, porém não conhecem o seu nome, e por isso estranham quando perguntam pela praça, ela é mais conhecida como "Praça da Floricultura" visto que existe um <a href="https://www.google.com/search?q=pra%C3%A7a%20da%20floricultura%20vitoria%20da%20conquista&sxsrf=ALeKk03tXK0AqEu559WJDQN9mGZuH9sr3A:1622992087420&ei=LuS8YOjNHIbX1sQPuqu8wAs&oq=Pra%C3%A7a+da+Floricultura+Vit%C3%B3ria+da+co&gs_lcp=Cgdnd3Mtd2l6EAMYADIICCEQFhAdEB46BwgjELADECc6BAgjECc6BQgAELEDOgUILhCxAzoCCC46BAguEEM6CAgAELEDEIMBOgQIABBDOgIIADoHCC4QyQMQQzoLCAAQsQMQxwEQrwE6CAgAEMcBEK8BOg4IABCxAxCDARDHARCvAToGCAAQFhAeOgQIABANOgYIABANEB5Q45sDWMHlA2CK9ANoB3AAeACAAcQCiAGgMJIBCDAuMzYuMS4xmAEAoAEBqgEHZ3dzLXdpesgBAcABAQ&sclient=gws-wiz&tbs=lf:1,lf_ui:2&tbm=lcl&rflfq=1&num=10&rldimm=17711921536956828807&lqi=CitwcmHDp2EgZGEgZmxvcmljdWx0dXJhIHZpdG9yaWEgZGEgY29ucXVpc3RhWjsKBnByYcOnYSIrcHJhw6dhIGRhIGZsb3JpY3VsdHVyYSB2aXRvcmlhIGRhIGNvbnF1aXN0YSoECAMQAJIBB2Zsb3Jpc3SqAQ4QASoKIgZwcmHDp2EoDA&ved=2ahUKEwjN09_WpIPxAhWxqZUCHfhQBt8QvS4wAnoECAQQRQ&rlst=f#rlfi=hd:;si:2861926115084404373,l,CitwcmHDp2EgZGEgZmxvcmljdWx0dXJhIHZpdG9yaWEgZGEgY29ucXVpc3RhWjsKBnByYcOnYSIrcHJhw6dhIGRhIGZsb3JpY3VsdHVyYSB2aXRvcmlhIGRhIGNvbnF1aXN0YSoECAMQAJIBB2Zsb3Jpc3SqAQ4QASoKIgZwcmHDp2EoDA;mv:[[-14.847035367807408,-40.840354954091566],[-14.84969023439183,-40.84542969354774],null,[-14.848362805176302,-40.842892323819655],18]" target="_blank" rel="noreferrer">conjunto de floriculturas</a> no centro da praça.
        </p>
        <p>
          Atualmente nem a localização da praça nem o seu CEP, 45000-715 aparecem nos registros do <a href="https://goo.gl/maps/QqeubmJ81qX84Fqr6" target="_blank" rel="noreferrer">Google Maps</a>, por esta razão foi criado esse site para ajudar entregadores e transportadores localizarem a praça.
        </p>
        <p>
          Segue abaixo algumas informações sobre o CEP da praça e adjecentes:
        </p>
        <Table>
          {
            ceps.map(line => (<Row>
              <Column>{line.logradouro}</Column>
              <Column>{line.cep}</Column>
            </Row>))
          }
        </Table>
        <p>
          Esse projeto foi desenvolvido por <a href="http://cancio.dev" target="_blank" rel="noreferrer">Filipe Câncio</a> com <a href="https://github.com/facebook/create-react-app" target="_blank" rel="noreferrer">Create React App</a>.
      </p>
      </Content>
    </Container>
  );
}

export default App;
