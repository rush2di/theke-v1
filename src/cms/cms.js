import CMS from "netlify-cms-app"
import { fr } from "netlify-cms-locales"
import "../components/styles/index.scss"
import PostPreview from "./previews/postPreview"

CMS.registerLocale("fr", fr)
CMS.registerPreviewTemplate("articles", PostPreview)