import React, { useState, useMemo } from 'react';
import AreasList from '../AreasList';
import SpecialitiesTabs from '../SpecialitiesTabs';
import { AreasSectionProps, Speciality  } from '../../types/Calculator';

function AreasSection(props: AreasSectionProps) {
	const { areas } = props;
	const [active, setActive] = useState<string>("");
	
	const areasNames: string[] = useMemo(() => areas.map(e => e.name), [areas]);
	const activeSpecialities: Speciality[] = useMemo(() => areas.find(e => e.name === active)?.specialities, [areas, active]);

	return (
		<div className="flex w-full mb-8 mt-2">
			<AreasList areas={areasNames} onSelect={setActive} active={active} />
			<SpecialitiesTabs data={activeSpecialities} />
		</div>
	)
}

export default AreasSection;
