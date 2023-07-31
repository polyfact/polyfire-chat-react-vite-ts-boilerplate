import styled from 'styled-components'

export const SelectedPage = styled.li`
	&:before {
		content: '';
		position: absolute;
		background-color: #009933;
		width: 4rem;
		height: 0.2rem;
		bottom: -16px;
		left: -13px;
	}
`
