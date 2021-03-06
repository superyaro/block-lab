/**
 * WordPress dependencies
 */
import { BaseControl } from '@wordpress/components';

/**
 * Internal dependencies
 */
import { TinyMCE } from '../components';

const BlockLabClassicTextControl = ( props ) => {
	const { field, getValue, onChange, rowIndex, parentBlockProps: { clientId } } = props;
	const editorId = 'number' === typeof rowIndex ? `bl-${ clientId }-${ field.name }-rowIndex-${ rowIndex }` : `bl-${ clientId }-${ field.name }`;
	const initialValue = getValue( props );
	const value = 'undefined' !== typeof initialValue ? initialValue : field.default;

	return (
		<BaseControl
			label={ field.label }
			id={ `bl-classic-text-${ clientId }` }
			className="block-lab-classic-text-control"
			help={ field.help }
		>
			<TinyMCE
				content={ value }
				onChange={ onChange }
				editorId={ editorId }
			/>
		</BaseControl>
	);
};

export default BlockLabClassicTextControl;
