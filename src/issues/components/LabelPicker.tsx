import { FC } from 'react';
import { LoadingIcon } from '../../shared/components/LoadingIcon';
import { useLabels } from '../hooks/useLabels';
// const getLabels = async() =>{
//   const res = await fetch('https://api.github.com/repos/facebook/react/labels');
//   const data = await res.json();
//   return data;
// }

interface Props {
  selectedLabels: string[];
  onChange: (labelName: string) => void;   
}

export const LabelPicker: FC<Props> = ({selectedLabels, onChange}) => {

  const LabelsQuery = useLabels();

  if(LabelsQuery.isLoading) //Por qu isLoading ?
    return (<LoadingIcon />)

  return (
    <>
      {
        LabelsQuery.data?.map(label => (
          <span
              key={label.id}
              className={`badge rounded-pill m-1 label-picker ${ selectedLabels.includes(label.name)? 'label-active' : '' } `}
              style={{ border: `1px solid #${label.color}`, color: `#${label.color}` }}
              onClick={()=> onChange(label.name)}
          >
              { label.name }
          </span>
        ))
      }
        
    </>
  )
}
