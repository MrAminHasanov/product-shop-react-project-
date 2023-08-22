import { useState } from "react";
import c from "./ProductDescription.module.scss";

function ProductDescription() {
  const texts = {
    Description:
      "Proin eget tortor risus. Praesent sapien massa, convallis a pellentesque nec, egestas non nisi. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Cras ultricies ligula sed magna dictum porta. Cras ultricies ligula sed magna dictum porta. Sed porttitor lectus nibh. Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. Sed porttitor lectus nibh. Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. Proin eget tortor risus.",
    Information:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio quisquam numquam iure reprehenderit ipsum, esse qui mollitia quaerat rerum eligendi dolorem maiores. Ad veniam veritatis distinctio at inventore hic, voluptates porro omnis corporis? Magnam odio voluptatem ipsam quaerat, esse perspiciatis beatae dolore eligendi error voluptatum possimus placeat blanditiis earum ab.",
    Reviews:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi veritatis quo labore fugit voluptatem, voluptates modi temporibus impedit dignissimos repellendus quibusdam ullam facilis quisquam rerum, tempora a voluptatum! Exercitationem voluptatibus saepe velit totam ratione ipsa, aut quia possimus tempora corporis! Alias numquam dolores facilis similique voluptatibus fuga accusamus in ea reprehenderit saepe, quas labore pariatur neque perferendis ut commodi adipisci, esse, veniam atque aut veritatis quisquam ex officia odit. Molestias!",
  };
  const [text, setText] = useState("Description");
  return (
    <div className={c.component}>
      <div className={c.nav}>
        <hr />
        <ul>
          {Object.keys(texts).map((textKey, i) => (
            <li onClick={() => setText(textKey)} 
              className={text===textKey ? c.activeLink:null}
            key={i}>
              {textKey}
            </li>
          ))}
        </ul>
      </div>
      <div className={c.text}>
        <div>
          Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui.
          Pellentesque in ipsum id orci porta dapibus. Proin eget tortor risus.
          Vivamus suscipit tortor eget felis porttitor volutpat. Vestibulum ac
          diam sit amet quam vehicula elementum sed sit amet dui. Donec rutrum
          congue leo eget malesuada. Vivamus suscipit tortor eget felis
          porttitor volutpat. Curabitur arcu erat, accumsan id imperdiet et,
          porttitor at sem. Praesent sapien massa, convallis a pellentesque nec,
          egestas non nisi. Vestibulum ac diam sit amet quam vehicula elementum
          sed sit amet dui. Vestibulum ante ipsum primis in faucibus orci luctus
          et ultrices posuere cubilia Curae; Donec velit neque, auctor sit amet
          aliquam vel, ullamcorper sit amet ligula.
        </div>
        <div>{texts[text]}</div>
      </div>
    </div>
  );
}

export default ProductDescription;
