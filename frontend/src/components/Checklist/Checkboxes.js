import React, { useState, useEffect } from 'react';
import { putChecklist, addToChecklist } from '../../common/ChecklistService';

import FormControl from '@mui/material/FormControl';
import FormControlLabel from '@mui/material/FormControlLabel';

import { FieldTextDiv, BoxContainer, FormControlWrapper, MyCheckbox, InputField } from './styledComponent';

const Checkboxes = ({ checklist = [] }) => {
  const [boxes, setBoxes] = useState({});
  const [inputValue, setInputValue] = useState('');

  const onInputChange = (e) => {
    setInputValue(e.target.value);
  };
  useEffect(() => {
    checklist.sort(function (Checkbox, nextCheckbox) {
      return Checkbox.is_done === nextCheckbox.is_done ? 0 : Checkbox.is_done ? -1 : 1;
    });
    const boxMap = checklist?.reduce((next, currentItem) => {
      return { ...next, [currentItem.title]: currentItem };
    }, {});
    setBoxes(boxMap);
  }, [checklist]);

  const handleChange = (event) => {
    setBoxes({ ...boxes, [event.target.name]: { ...boxes[event.target.name], is_done: event.target.checked } });
    updateChecklist(event.target.id, event.target.checked);
  };

  const updateChecklist = (id, checked) => {
    const toUpdate = {
      is_done: checked
    };
    putChecklist(id, toUpdate);
  };
  const handleNewCheckbox = async (event) => {
    if (event.code === 'Enter') {
      const newChecklist = {
        title: event.target.value,
        is_done: false
      };
      const res = await addToChecklist(newChecklist);
      setBoxes({ ...boxes, [event.target.value]: { title: event.target.value, is_done: false, id: res.id } });
      setInputValue('');
    }
  };

  return (
    <BoxContainer>
      <FormControl component='fieldset' variant='standard'>
        <FormControlWrapper>
          {Object.keys(boxes).map((item, index) => {
            return (
              <FormControlLabel
                key={index}
                control={
                  <MyCheckbox
                    checked={boxes[item].is_done}
                    onChange={handleChange}
                    name={item}
                    id={String(boxes[item].id)}
                  />
                }
                label={item}
              />
            );
          })}
        </FormControlWrapper>
        <FieldTextDiv>
          <InputField
            type='text'
            onChange={onInputChange}
            placeholder='Type to add a task'
            onKeyPress={handleNewCheckbox}
            name='name'
            value={inputValue}
          />
        </FieldTextDiv>
      </FormControl>
    </BoxContainer>
  );
};
export default Checkboxes;
