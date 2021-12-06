/* This example requires Tailwind CSS v2.0+ */
import {Fragment, useState} from 'react'
import {Listbox, Transition} from '@headlessui/react'
import {CheckIcon, SelectorIcon} from '@heroicons/react/solid'
import styled from "styled-components";

const people = [
    {
        id: 1,
        name: 'Filter 1',
        avatar:
            'https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
    {
        id: 2,
        name: 'Filter 2',
        avatar:
            'https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
    {
        id: 3,
        name: 'Filter 3',
        avatar:
            'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.25&w=256&h=256&q=80',
    },
    {
        id: 4,
        name: 'Filter 4',
        avatar:
            'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    }
]

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

function ListBoxSelect() {
    const [selected, setSelected] = useState(people[3])

    return (
        <Listbox value={selected} onChange={setSelected}>
            {({open}) => (
                <>
                    <div className="relative">
                        <div
                            className={'absolute bg-ship-gray w-44 pl-3 pr-10 py-2 h-[107%] w-[11.15rem] my-[-1px] mx-[-1px]'}
                            style={{clipPath: 'polygon(5% 0%,0% 100%,95% 100%,100% 0%)'}}
                        />
                        <Listbox.Button
                            style={{clipPath: 'polygon(5% 0%,0% 100%,95% 100%,100% 0%)'}}
                            className={`group relative w-44 pl-3 pr-10 py-2 text-left cursor-default bg-woodsmoke hover:bg-ship-gray ${open ? 'bg-ship-gray' : ''} cursor-pointer focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm`}>
                            <span className="flex items-center">
                                <span className={`ml-3 block truncate text-white`}>{selected.name}</span>
                            </span>
                            <span
                                className="ml-3 absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
                                <SelectorIcon
                                    className={`h-5 w-5 text-gray-400 group-hover:text-blaze-orange ${open ? 'text-blaze-orange' : ''}`}
                                    aria-hidden="true"/>
                            </span>
                        </Listbox.Button>

                        <Transition
                            show={open}
                            as={Fragment}
                            leave="transition ease-in duration-100"
                            leaveFrom="opacity-100"
                            leaveTo="opacity-0"
                        >
                            <Listbox.Options
                                static
                                className="absolute z-10 mt-3 w-full bg-ship-gray max-h-56 py-1 text-base overflow-auto focus:outline-none sm:text-sm"
                            >
                                {people.map((person) => (
                                    <Listbox.Option
                                        key={person.id}
                                        className={({active}) =>
                                            classNames(
                                                active ? 'bg-blaze-orange' : '',
                                                'group cursor-pointer select-none relative py-1 pl-3 pr-9 text-white'
                                            )
                                        }
                                        value={person}
                                    >
                                        {({selected, active}) => (
                                            <>

                                                <div className="group flex items-center">
                                                    <span
                                                        className={classNames(selected ? 'text-white' : 'font-normal', 'text-white ml-3 block truncate')}
                                                    >
                                                    {person.name}
                                                </span>
                                                </div>
                                            </>
                                        )}
                                    </Listbox.Option>
                                ))}
                            </Listbox.Options>
                        </Transition>
                    </div>
                </>
            )}
        </Listbox>
    )
}

export default ListBoxSelect;

