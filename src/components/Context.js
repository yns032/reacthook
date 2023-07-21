import React, { useContext } from "react";
import { ThemeContext } from "../App";
function Context() {
  const theme = useContext(ThemeContext);
  console.log(theme);
  return (
    <div>
      <div style={{ theme }}>
        <p>
          Context, geçerli kimliği doğrulanmış kullanıcı, tema veya tercih
          edilen dil gibi bir React bileşenleri ağacı için "küresel" kabul
          edilebilecek verileri paylaşmak üzere tasarlanmıştır.
        </p>

        <p>
          Bir Bağlam nesnesi oluşturur. ProviderReact, bu Context nesnesine
          abone olan bir bileşen oluşturduğunda, mevcut bağlam değerini ağaçtaki
          en yakın eşleşmeden okuyacaktır .
        </p>
        <p>
          Bir sınıftaki özelliğe contextType, tarafından oluşturulan bir Bağlam
          nesnesi atanabilir React.createContext(). Bu özelliğin kullanılması,
          kullanarak o Bağlam türünün en yakın geçerli değerini tüketmenize
          olanak tanır this.context. Buna, işleme işlevi dahil olmak üzere
          herhangi bir yaşam döngüsü yönteminde başvurabilirsiniz.
        </p>
      </div>
    </div>
  );
}

export default Context;
