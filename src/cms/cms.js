import CMS from 'netlify-cms-app';
import { fr } from 'netlify-cms-locales';

CMS.registerLocale('fr', fr);

// export const TagsPreview = createClass({
//   render: function() {
//     const { value, fieldsMetaData } = this.props
//     const post = fieldsMetaData && fieldsMetaData.getIn(["tags", value])
//     const style = {
//       border: "2px solid #ccc",
//       borderRadius: "8px",
//       padding: "20px",
//     }
//     return post
//       ? h(
//           "div",
//           { style: style },
//           h("h2", {}, "tags"),
//           h("h3", {}, post.get("tag"))
//         )
//       : null
//   },
// })

// CMS.registerWidget("tagswidget",'related', TagsPreview)
