import { useEffect, useState } from "react"
import { useHistory } from "react-router"

import { Container } from "./EditPostStyled"

import Input from '../components/Input'
import InputFile from "../components/InputFile"
import Button from '../components/Button'
import Editor from "../components/Editor"

import api from '../services/api'

import heartNotFilledImg from '../assets/icons/awesome-heart-1.svg'
import commentImg from '../assets/icons/awesome-comment-alt.svg'
import eyeImg from '../assets/icons/awesome-eye.svg'


const EditPost = () => {

  const [name, setName] = useState('')
  const [content, setContent] = useState('')
  const [banner_image, setBanner_image] = useState('')

  const [tags, setTags] = useState([])
  const [selectedTags, setSelectedTags] = useState([])

  const history = useHistory()

  useEffect(() => {
    api.get('/tags')
      .then(res => res.data)
      .then(data => {
        data.map(tag => {
          tag.checked = false
          return tag
        })
        setTags(data)
      })
  }, [])

  useEffect(() => {
    setTags(tags => tags.map(tag => {
      tag.checked = selectedTags.includes(tag.id)
      return tag
    }))
  }, [selectedTags])


  const handleSubmit = e => {
    e.preventDefault()

    const data = new FormData()

    data.append('name', name)
    data.append('content', content)
    data.append('views', 0)
    if (banner_image)
      data.append('banner_image', banner_image, banner_image.name)

    const token = localStorage.getItem('token')

    api.post('/posts', data, {
      headers: {
        Authorization: token,
        'Content-Type': 'multipart/form-data'
      }
    })
      .then(async res => {
        const { id } = res.data

        selectedTags.map(async tag_id =>
          await api.post('/tagposts', { post_id: id, tag_id }))
      })
  }

  return (
    <Container>
      <form onSubmit={handleSubmit}>
        <div className="title">
          <h2>BACKOFFICE</h2>
          <h1>Criar Publicação</h1>
        </div>

        <div className="post-title-inputs">
          <Input
            label='Título da Publicação'
            name='title'
            value={name}

            onChange={e => setName(e.target.value)}
          />

          <div className="post-infos">

            <p>
              <img src={heartNotFilledImg} alt="Likes" />
              0
            </p>

            <p>
              <img src={commentImg} alt="Comentários" />
              0
            </p>

            <p>
              <img src={eyeImg} alt="Visualizações" />
              0
            </p>
          </div>
        </div>

        <Editor
          value={content}
          onChange={value => setContent(value)}
        />

        <InputFile
          type='file'
          name='banner'
          accept='image/png, image/jpeg'
          onChange={e => setBanner_image(e.target.files[0])}
        />

        <div className="tags-field">
          <label className="main-label" htmlFor="">Escolha pelo menos uma tag:</label>
          <div className="checkboxes">
            {tags.map(tag => <div key={tag.id} className="input-field">
              <input
                type="checkbox"
                id={tag.name + tag.id}
                name={tag.name + tag.id}
                checked={tag.checked}
                onChange={e => setSelectedTags(tags =>
                  (e.target.checked) ?
                    [...tags, tag.id] :
                    tags.filter(tagId => tagId !== tag.id)
                )}
              />
              <label htmlFor={tag.name + tag.id}>{tag.name}</label>
            </div>)}
          </div>
          <Button
            fontSize='16px'
            padding='15px 25px'
            style={{ margin: '30px 0' }}
            onClick={() => history.push('/backoffice/manage-tags')}
          >GERENCIAR TAGS</Button>
        </div>

        <div className="final-btns">
          <Button
            fontSize='16px'
            padding='15px 25px'
            isPink
            type='submit'
          >PUBLICAR</Button>

          <Button
            fontSize='16px'
            padding='15px 25px'
            onClick={history.goBack}
          >VOLTAR</Button>
        </div>
      </form>
    </Container>
  )
}

export default EditPost