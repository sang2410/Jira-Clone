import React, { useEffect, useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';

import { Button } from 'antd';
import { FiPaperclip, FiSettings } from 'react-icons/fi';
import { MdCreate, MdDashboard, MdEqualizer, MdErrorOutline, MdOutlineLocalShipping, MdTask, MdViewInAr } from 'react-icons/md';
import { useSelector } from 'react-redux';
import { userLocalStorage } from '../../utils/config';
function Menu() {
    const { projectDetail } = useSelector(state => state.projectSlice);
    const navigate = useNavigate();
    const user = userLocalStorage.get();
    return (
        <div className='menu'>
            <div className="menu__user">
                <img src="https://st3.depositphotos.com/1007566/12989/v/950/depositphotos_129895116-stock-illustration-hacker-character-avatar-icon.jpg" alt="" />
                <div className="menu__user-info">
                    <div className='framework'>{user.name}</div>
                    <div className='project'>Jira Clone 2.0</div>
                </div>
            </div>
            <Button type='link' onClick={() => {
                if (projectDetail?.id) navigate(`/board/${projectDetail?.id}`)
                else navigate('/projects')
            }} className='menu__item'>
                <MdDashboard className='menu__item-icon' />
                <span>Kanban Board</span>
            </Button>
            <NavLink to='/create' className='menu__item'>
                <MdCreate className='menu__item-icon' />
                <span>Create Projects</span>
            </NavLink>
            <NavLink to='/projects' className='menu__item'>
                <MdTask className='menu__item-icon' />
                <span>Project Management</span>
            </NavLink>
            <hr></hr>
            <div className="menu__item">
                <MdOutlineLocalShipping className='menu__item-icon' />
                <span>Releases</span>
                <span className='implemente'>Not implemented</span>
            </div>
            <div className="menu__item">
                <MdErrorOutline className='menu__item-icon' />
                <span>Issues and filters</span>
                <span className='implemente'>Not implemented</span>
            </div>
            <div className="menu__item">
                <FiPaperclip className='menu__item-icon' />
                <span>Pages</span>
                <span className='implemente'>Not implemented</span>
            </div>
            <div className="menu__item">
                <MdEqualizer className='menu__item-icon' />
                <span>Reports</span>
                <span className='implemente'>Not implemented</span>
            </div>
            <div className="menu__item">
                <MdViewInAr className='menu__item-icon' />
                <span>Components</span>
                <span className='implemente'>Not implemented</span>
            </div>
        </div>
    )
}

export default Menu;
