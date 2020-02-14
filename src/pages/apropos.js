import React from "react"
import Layout from "../components/layout"
import img1 from "../../static/assets/apropos-1.jpg"
import img2 from "../../static/assets/apropos-2.jpg"
import { Helmet } from "react-helmet"

const Apropos = () => {
  return (
    <React.Fragment>
      <Helmet>
        <title>À propos | Theke</title>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta property="og:title" content={"À propos | Theke"} />
        <meta
          property="og:description"
          content={"à propos de notre blog Theke"}
        />
      </Helmet>
      <Layout>
        <div className="section">
          <h3>à propos de nous</h3>
          <div className="grid-table">
            <div
              className="left about-img"
              style={{ backgroundImage: `url(${img1})`, gridArea: "img1" }}
              alt="apropos1"
            />
            <p style={{ gridArea: "txt1" }}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit
              quas nobis possimus at! Corrupti illum laborum dignissimos eveniet
              quae temporibus, accusantium assumenda quaerat tempore natus
              voluptas reprehenderit commodi repudiandae necessitatibus sequi
              officiis maiores consequatur esse fuga error repellat sed
              inventore distinctio? Recusandae ullam inventore necessitatibus
              animi, blanditiis eos consequuntur quia neque eius illum, laborum
              facere sit a ab repudiandae unde voluptate deleniti harum fuga
              incidunt nemo! Obcaecati sequi cumque, nostrum, dolores minus
              provident earum a, rem possimus esse sit dignissimos ut eaque.
              Ipsum, labore? Minus, distinctio doloremque. Sunt, dicta tenetur.
            </p>
            <p style={{ gridArea: "txt2" }}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. At illum
              nihil repellat assumenda dicta voluptate repudiandae nostrum quam
              necessitatibus, veritatis delectus facilis porro. Mollitia
              provident eaque in error non et ratione, nulla necessitatibus!
              Dolor eum eveniet fugiat. Eligendi, autem delectus hic asperiores
              explicabo ipsa iusto deserunt? Cupiditate vel voluptas
              consequuntur at facere odit, corporis vitae saepe voluptates
              similique fugiat doloribus unde, cumque ab nobis neque ipsa
              voluptatibus voluptate dolor debitis, ratione quam sapiente.
              Laudantium vitae veniam, amet architecto error repudiandae! Nisi
              dolore reiciendis error id.
            </p>
            <div
              className="right about-img"
              style={{ backgroundImage: `url(${img2})`, gridArea: "img2" }}
              alt="apropos2"
            />
          </div>
        </div>
      </Layout>
    </React.Fragment>
  )
}

export default Apropos
