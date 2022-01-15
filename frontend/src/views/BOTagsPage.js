import { useState, useEffect } from 'react';
import { useHistory, Link } from 'react-router-dom';

import { Container, TitleContainer } from './BOPostsStyle';

import Table from '../components/Table';
import Button from '../components/Button';

import api from '../services/api';
import Loading from '../components/Loading';

const BOTagsPage = () => {
    
    const history = useHistory();

    const [isLoading, setIsLoading] = useState(false);
    const [tags, setTags] = useState([]);
    const dataColumns = ['#', 'Nº de Publicações', 'Nome', 'empty1', 'empty2'];
    
    useEffect( () => {
        const treatTag = tag => {
            const limitString = (str, limit) => str.substring(0, limit) + (str.length > 25 ? '...' : '')
        
            const newData = {};
            
            newData['id'] = tag.id;
            newData['#'] = tag.id;
            newData['Nº de Publicações'] = tag.posts;
            newData['Nome'] = limitString(tag.name, 25);
            newData['empty1'] = <Link to={'/backoffice/edit-tag/' + tag.id}>Editar</Link>
            newData['empty2'] = <button onClick={() => deleteTag(tag.id)}>Excluir</button>

            return newData;
        }

        setIsLoading(true)
        api.get('/tags/?sort=id', {
                headers: {
                    Authorization: localStorage.getItem('token')
                }
            })
            .then(res => res.data)
            .then(tags => tags.map(tag => treatTag(tag)))
            .then(tags => setTags(tags))
            .finally(() => setIsLoading(false))

    }, [])
    
    const deleteTag = id => {
        api.delete('/tags/' + id, {
                headers: {
                    Authorization: localStorage.getItem('token')
                }
            })
            .then(() => setTags(tags => tags.filter(tag => tag.id !== id)))
    }

    

    return (
        <Container
            style={{
                margin: '30px 90px'
            }}
        >
            <TitleContainer>
                <p 
                    className="title"
                    style={{ 
                        fontSize: '22pt'
                    }}
                >
                    BACKOFFICE
                </p>
                <p 
                    className="subtitle"
                    style={{
                        fontSize: '32pt'
                    }}
                >
                    Todas as tags
                </p>
            </TitleContainer>
    
            <Table columns={dataColumns} linesData={tags} />
            {isLoading && <Loading isPink style={{display: 'block'}} />}
    
            <Button
                fontSize='16pt'
                padding='15px 40px'
                onClick={() => history.push('/backoffice/create-tag')}
            >
                NOVA TAG
            </Button>
        </Container>
    )
  }
  
  export default BOTagsPage;