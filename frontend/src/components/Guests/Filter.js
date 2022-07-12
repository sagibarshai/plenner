import React, { useState } from 'react'
import filterIcon from '../../images/svg/filters.svg'
import searchIcon from '../../images/svg/search.svg'
import {
    FilterIconStyled,
    FilterFormStyled,
    DropDownStyled,
    LabelStyled,
    InputStyled,
    SearchIconStyled,
    FormContentStyled,
    TitleLabelStyled
} from './styledComponent'

const FILTERS = [
    {
        label: 'Attending', name: 'attending', id: 'attending', options: [
            { label: 'All', name: 'all', id: 'all' },
            { label: '1', name: '1', id: "1" },
            { label: '2', name: '2', id: "2" },
            { label: '3', name: '3', id: "3" },
            { label: '4', name: '4', id: "4" }]
    },
    {
        label: 'Side', name: 'side', id: 'side', options: [
            { label: 'Bride and groom', name: 'brideAndGroom', id: 'brideAndGroom' },
            { label: 'Bride', name: 'bride', id: "bride" },
            { label: 'Groom', name: 'groom', id: "groom" }]
    },
    {
        label: 'Group', name: 'group', id: 'group', options: [
            { label: 'All', name: 'all', id: 'all' },
            { label: 'Friends', name: 'friends', id: "friends" },
            { label: 'Close friends', name: 'close friends', id: "closeFriends" },
            { label: 'Family', name: 'family', id: "family" },
            { label: 'Close Family', name: 'close family', id: "closeFamily" },
            { label: 'Work', name: 'work', id: "work" }
        ]
    }
]

export default function Filter({ onFilter, onSearch,
    attendingFiltered,
    sideFiltered,
    groupFiltered,
    setAttendingFiltered,
    setSideFiltered,
    setGroupFiltered
}) {
    const changeSide = (event) => {
        setSideFiltered(event.target.value)
    }
    const changeAttending = (event) => {
        setAttendingFiltered(event.target.value)
    }
    const changeGroup = (event) => {
        setGroupFiltered(event.target.value)
    }
    const searchFunc = (event) => {
        event.preventDefault();
        onSearch(event.target.value)
    }
    const displayOptions = (options) => options.map(
        (option, index) => {
            return (
                <option value={option.name} key={index} >{option.label}</option>
            )
        }
    )
    const FILTER_HANDLERS = {
        attending: changeAttending,
        side: changeSide,
        group: changeGroup

    }
    const displayData = FILTERS.map(
        (filter, index) => {
            return (
                <FormContentStyled key={index}>
                    <LabelStyled>{filter.label}</LabelStyled>
                    <DropDownStyled onChange={(event) => {
                        FILTER_HANDLERS[filter.name](event);
                    }}>
                        {displayOptions(filter.options)}
                    </DropDownStyled>
                </FormContentStyled>
            )
        }
    )
    return (
        <div>
            <FilterIconStyled src={filterIcon}></FilterIconStyled>
            <FilterFormStyled>
                <TitleLabelStyled>Filter by:</TitleLabelStyled>
                {displayData}
                <SearchIconStyled src={searchIcon}></SearchIconStyled>
                <InputStyled onChange={searchFunc} placeholder='Search' ></InputStyled>
            </FilterFormStyled>
        </div>
    )
}
