import React, { useState, useEffect } from 'react';
import { ChecklistContainer, ChecklistHeader } from './styledComponent';
import Checkboxes from './Checkboxes';
import { getChecklist } from '../../common/ChecklistService';

const Checklist = () => {
  const [checklist, setChecklist] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const data = await getChecklist();
      setChecklist(data);
    };
    fetchData().catch(console.error);
  }, []);

  return (
    <ChecklistContainer>
      <ChecklistHeader>Checklist</ChecklistHeader>
      <Checkboxes checklist={checklist} />
    </ChecklistContainer>
  );
};
export default Checklist;
