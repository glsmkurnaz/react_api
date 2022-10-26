import {useParams} from 'react-router-dom'

function Categories() {
  const params = useParams()

  return (
    <div>
      Burası kategoriler sayfası.
      <br />
      Slug: {params.slug}
    </div>
  )
}


export default Categories