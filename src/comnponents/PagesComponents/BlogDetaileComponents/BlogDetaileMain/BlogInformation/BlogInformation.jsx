import { Link, useParams } from "react-router-dom";

import adminImage from "img/author-image.jpg";
import c from "./BlogInformation.module.scss";
import Title from "comnponents/GlobalComnponets/Title/Title";
import { blogsContent } from "context/BlogContext/BlogContext";
import BackPageButton from "comnponents/GlobalComnponets/BackPageButton/BackPageButton";

function BlogInformation() {
  const { id } = useParams();
  const blogContent = blogsContent.find((blog) => blog.id === Number(id));

  return (
    <div className={c.component}>
      <BackPageButton />
      <Title context={blogContent.title} />
      <div className={c.blog}>
        <div className={c.imgBox}>
          <img src={blogContent.img} alt="" />
          <div className={c.text}>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illum
            dolorem nisi est, repudiandae iusto ea mollitia, esse similique
            aliquid consequatur, sequi deleniti quos unde sapiente consequuntur
            labore voluptas explicabo fuga nesciunt maiores rerum! Sequi
            doloribus reprehenderit totam, ab commodi voluptates dignissimos,
            aut, numquam odit enim libero ipsa impedit illum magni natus
            necessitatibus eveniet? Totam vel eum, eos nulla tempora quisquam?
          </div>
        </div>
        <div className={c.text}>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Porro cum
          officiis culpa natus placeat, commodi praesentium doloremque corrupti
          accusamus similique, omnis nostrum esse nulla? Modi, aliquid
          exercitationem molestiae odit mollitia, culpa doloremque labore, sit
          ea voluptatibus quam corrupti. Quisquam dolore voluptatibus sit
          tempore, repellat aspernatur ratione voluptas itaque minima.
          Voluptatibus sequi debitis rem labore blanditiis enim, placeat tempora
          sit adipisci tenetur ea, rerum, voluptates nisi cum quae animi
          aspernatur quia nam! Rem voluptatibus obcaecati unde laborum vitae,
          hic autem voluptatum mollitia officiis veniam? Aliquid, perferendis
          quis provident illum maiores asperiores saepe esse aspernatur debitis
          explicabo. Ex labore, velit at sint eius, numquam porro, quibusdam
          ipsa minima itaque saepe ipsum ipsam doloribus quis. Reiciendis
          aliquam non commodi obcaecati libero, quidem nulla.
        </div>
      </div>
      <div className={c.blogAction}>
        <div className={c.informationBox}>
          <div className={c.admin}>
            <img src={adminImage} className={c.adminImage} alt="" />
            <div className={c.textBox}>
              <div className={c.name}>Michael Scofield</div>
              <div className={c.role}>Admin</div>
            </div>
          </div>
          <div className={c.detaileBox}>
            <ul>
              <li>Tags:</li>
              <li>{blogContent.category}</li>
            </ul>
            <ul>
              <li>Data:</li>
              <li>{blogContent.data}</li>
            </ul>
            <div className={c.icons}></div>
          </div>
        </div>
        <Link to={"/blog"} className={c.link}>
          Continue searching blogs
        </Link>
      </div>
    </div>
  );
}

export default BlogInformation;
