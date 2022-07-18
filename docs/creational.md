<a href='../README.md' style='border: 1px solid gold; padding: 5px; color: gold'>← back to README.md</a>

# Metoda wytwórcza (Factory Method)

Udostępnia interfejs do tworzenia obiektów w klasie bazowej, ale pozwala podklasom zmieniać typ tworzonych obiektów.
Obiekty nazywane są produktami metody wytwórczej. Metoda wytwórcza definiuje metodę która ma służyć tworzeniu obiektów bez bezpośredniego wywoływania konstruktora (poprzez operator new). 

Metoda Wytwórcza oddziela kod konstruujący produkty od kodu który faktycznie z tych produktów korzysta. Dlatego też łatwiej jest rozszerzać kod konstruujący produkty bez konieczności ingerencji w resztę kodu.

Przykładowo, aby dodać nowy typ produktu do aplikacji, będziesz musiał utworzyć jedynie podklasę kreacyjną i nadpisać jej metodę wytwórczą.

Identyfikacja: Metody wytwórcze można poznać po metodach kreacyjnych tworzących obiekty na podstawie konkretnych klas, ale zwracających typ abstrakcyjny lub interfejs.

W skrócie:

Produkty implementują interfejs ogólny, np.

`Chicken implements Bird`

`Swan implements Bird`

Kreatory rozszerzają klasę kreatora abstrakcyjnego, który wymusza nadpisanie metody wytwórczej zwracającej obiekty konkretnej klasy produktów (Chicken, Swan)

```js
abstract class BirdCreator {
  // metoda fabryczna kreatora abstrakcyjnego
  public abstract birdFactoryMethod(): Bird
}

class ChickenCreator extends BirdCreator {
  // implementacja kreatora kurczaków zwraca kurczaka jako obiekt interfejsu Bird
  public birdFactoryMethod(): Bird {
    return new Chicken()
  }  
}
```

🔥 Stosuj Metodę Wytwórczą gdy nie wiesz z góry jakie typy obiektów pojawią się w twoim programie i jakie będą między nimi zależności.


# Fabryka abstrakcyjna

Umożliwia tworzenie rodzin spokrewnionych ze sobą obiektów bez określania ich konkretnych klas.

# Budowniczy

Daje możliwość konstruowania złożonych obiektów krok po kroku. Wzorzec ten pozwala produkować różne typy oraz reprezentacje obiektu używając tego samego kodu konstrukcyjnego.

# Prototyp

Umożliwia kopiowanie istniejących obiektów bez tworzenia zależności pomiędzy twoim kodem, a ich klasami.

# Singleton

Pozwala zachować pewność, że istnieje wyłącznie jedna instancja danej klasy oraz istnieje dostęp do niej w przestrzeni globalnej.

<a href='../README.md' style='border: 1px solid gold; padding: 5px; color: gold'>← back to README.md</a>
<a href='#top' style='border: 1px solid gold; padding: 5px; color: gold'>↑ back to top</a>
