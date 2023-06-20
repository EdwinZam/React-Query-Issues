import { Link, Navigate, useParams } from 'react-router-dom';
import { IssueComment } from '../components/IssueComment';
import { useIssue } from '../hooks/useIssue';
import { Issue } from '../interfaces/issue';
import { LoadingIcon } from '../../shared/components/LoadingIcon';

interface Props {
  issue: Issue;
}

export const IssueView = () => {

  const params = useParams();
  //console.log(params) 
  const { id= '0'} = params;

  const {issueQuery, issueComment} = useIssue(+id);

  if (issueQuery.isLoading) 
    return <LoadingIcon />

  if(!issueQuery.data)
    return (<Navigate to="./issues/list"/>)

  return (
    <div className="row mb-5">
      <div className="col-12 mb-3">
        <Link to='./issues/list'>Go Back</Link>
      </div>

      {/* Primer comentario */}
      <IssueComment issue = {issueQuery.data!} />

      {/* Comentario de otros */}
      {
        issueComment.isLoading  && (<LoadingIcon />)
      }
      {
        issueComment.data?.map( issue => (
          <IssueComment key={issue.id} issue={ issue } />
        ) )
      }
    </div>
  )
}
