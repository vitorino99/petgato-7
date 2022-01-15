import { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

import { Container, TitleContainer } from './BOPostsStyle';

import Table from '../components/Table';
import ReportModal from '../components/ReportModal';

import api from '../services/api';
import Loading from '../components/Loading';

const BOReportsPage = () => {
    
    const [isLoading, setIsLoading] = useState(false);
    const [reports, setReports] = useState([]);
    const [currentReport, setCurrentReport] = useState({});
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = (report) => { setShow(true); setCurrentReport(report) } ;

    const dataColumns = ['Nº', 'Data', 'Publicação', 'Autor do comentário', 'empty1'];
    
    useEffect( () => {
        setIsLoading(true)
        api.get('/reports/?sort=id', {
                headers: {
                    Authorization: localStorage.getItem('token')
                }
            })
            .then(res => res.data)
            .then(reports => reports.map(report => treatReport(report)))
            .then(reports => setReports(reports))
            .finally(() => setIsLoading(false))
    }, []);

    const onReportsChange = (reportId) =>
        setReports(reports => reports.filter( ({id}) => id !== reportId ));

    const treatReport = report => {
        const formatIntNumber = num => ("0" + num).slice(-2)
        const limitString = (str, limit) => str.substring(0, limit) + (str.length > 25 ? '...' : '')
    
        const newData = {};
        
        newData['id'] = report.id;
        newData['#'] = report.id;

        const date = new Date(report.updated_at)
        newData['Data'] = `${formatIntNumber(date.getDate())}/${formatIntNumber(date.getMonth())}/${date.getFullYear()}`

        newData['Publicação'] = limitString(report.comment.comment_post, 30);
        
        if (report.reply) {
            newData['Autor do comentário'] = limitString(report.reply.reply_user, 25);
        } else {
            newData['Autor do comentário'] = limitString(report.comment.comment_user, 25);
        }

        newData['empty1'] = <button onClick={ e => handleShow(report)}>
            Exibir
        </button>

        return newData;
    }

    return (
        <>
            <Container
                style={{
                    margin: '30px auto'
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
                        Denúncias
                    </p>
                </TitleContainer>
        
                <Table columns={dataColumns} linesData={reports} />
                {isLoading && <Loading isPink style={{display: 'block'}} />}
            </Container>

            <ReportModal
                show={show}
                onHide={handleClose}
                report={currentReport}
                onReportsChange={onReportsChange}
            />
        </>
    )
  }
  
  export default BOReportsPage;