import {create} from "react-test-renderer";
import ProfileStatus from "./ProfileStatus";

describe('Profile Status component', () => {

    test(('status from props should be in the state'), () => {
        const component = create(<ProfileStatus status='something random' />);
        const instance = component.getInstance();
        expect(instance.state.status).toBe('something random');
    })

    test(('after mount with status - status must be displayed'), () => {
        const component = create(<ProfileStatus status='something random' />);
        const instance = component.root;
        const span = instance.findByType('span');
        expect(span.children[0]).not.toBeNull();
    })

    test(("after creation input shouldn't be displayed"), () => {
        const component = create(<ProfileStatus status='something random' />);
        const instance = component.root;

        expect(() => {
            const input = instance.findByType('input');
        }).toThrow();
    })

    test(('after mount with status - status equal to status from props'), () => {
        const component = create(<ProfileStatus status='something random' />);
        const instance = component.root;
        const span = instance.findByType('span');
        expect(span.children[0]).toBe('something random');
    })

    test(('input should be displayed after double click on span'), () => {
        const component = create(<ProfileStatus status='something random' />);
        const instance = component.root;
        const span = instance.findByType('span');
        span.props.onDoubleClick();
        const input = instance.findByType('input');
        expect(input.props.value).toBe('something random');
    })

    test('callback should be called', () => {
        const mockCallback = jest.fn();
        const component = create(<ProfileStatus status='something random' updateStatus={mockCallback} />);
        const instance = component.getInstance();
        instance.deactivateEditMode();
        expect(mockCallback.mock.calls.length).toBe(1);
    })
})
