import React from 'react';
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuIndicator,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    NavigationMenuViewport,
} from "@/components/ui/navigation-menu";
import LinkItem from './ui/linkItem';

const items = [
    {
        name: 'Avis & Tests',
        submenu: [
            {title:'Rasoirs', href:'/'},
            {title:'Savon à raser', href:'/'},
            {title:'Après rasage', href:'/'},
        ]
    },

]

const NavigationItems = () => {
    return (

        items.map((item, index) => {
            return (
                <NavigationMenu key={index}>
                    <NavigationMenuList>
                        <NavigationMenuItem>
                            <NavigationMenuTrigger>{item.name}</NavigationMenuTrigger>
                            <NavigationMenuContent>
                                <ul className="grid-cols-1 gap-3 p-6 md:max-w-[400px] lg:w-[200px] lg:grid-cols-[.75fr_1fr]">
                                    {item.submenu.map((sublink, index) => {
                                     return  <LinkItem href='/' key={index}>{sublink.title}</LinkItem>
                                    })}

                                </ul>
                            </NavigationMenuContent>
                        </NavigationMenuItem>
                    </NavigationMenuList>
                </NavigationMenu>
            )
        })

    )
}

export default NavigationItems