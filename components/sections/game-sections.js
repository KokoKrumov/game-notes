import React from 'react';
import SectionGameHero from "./section-game-hero";
import SectionGameDescriptionAndTable from "./section-game-description-and-table";
import SectionGameFeatures from "./section-game-features";


const Sections = {
    sectionGameHero: SectionGameHero,
    sectionGameDescriptionAndTable: SectionGameDescriptionAndTable,
    sectionGameFeatures: SectionGameFeatures
}


export default function GameSections(section) {

    if (typeof Sections[section['component']] !== "undefined") {

        return React.createElement(Sections[section['component']], {
            section: section
        });
    }
    // return React.createElement(
    //     () => <div>The component {block.component} has not been created yet.</div>,
    //     { key: section._uid }
    // );
}

