import {
  Close,
  Content,
  DialogOverlay,
  Portal,
  Root,
  Trigger,
} from '@radix-ui/react-dialog';
import {
  ForwardedRef,
  ReactNode,
  forwardRef,
  useImperativeHandle,
  useState,
} from 'react';
import ShowView from './show-view/show-view';
import SvgIcon from './svg-icon/svg-icon';

interface IModalProps {
  trigger: ReactNode;
  children: ReactNode | ((close: () => void) => ReactNode);
  hideCloseButton?: boolean;
  onClose?: () => void;
  disableEscapeDown?: boolean;
  disableOutsideClick?: boolean;
}

export type ModalRefActions = {
  open: () => void;
  close: () => void;
};

const Modal = forwardRef<unknown, IModalProps>(
  (
    {
      trigger,
      children,
      hideCloseButton,
      onClose,
      disableEscapeDown,
      disableOutsideClick,
    },
    ref
  ) => {
    const [isOpen, setIsOpen] = useState(false);

    const closeModal = () => {
      onClose?.();

      setIsOpen(false);
    };

    useImperativeHandle(ref, () => ({
      open: () => {
        setIsOpen(true);
      },
      close: closeModal,
    }));
    return (
      <Root open={isOpen} onOpenChange={setIsOpen}>
        <Trigger asChild>{trigger}</Trigger>
        <Portal>
          <DialogOverlay className="bg-[#020A064D] bg-opacity-5 data-[state=open]:animate-overlayShow p-10 backdrop-blur-sm fixed inset-0 grid place-items-center z-30">
            <Content
              ref={ref as ForwardedRef<HTMLDivElement>}
              onPointerDownOutside={(e) =>
                disableOutsideClick && e.preventDefault()
              }
              onEscapeKeyDown={(e) => disableEscapeDown && e.preventDefault()}
              className="data-[state=open]:animate-contentShow max-h-[90vh] lg:max-h-[85vh] w-full overflow-hidden max-w-[1200px] focus:outline-none"
            >
              <ShowView when={!hideCloseButton}>
                <Close className="bg-brand-gray-50 block ml-auto h-max w-max rounded-[50%]">
                  <SvgIcon
                    name="close"
                    onClick={closeModal}
                    className="w-10 h-10"
                  />
                </Close>
              </ShowView>

              {typeof children === 'function' ? children(closeModal) : children}
            </Content>
          </DialogOverlay>
        </Portal>
      </Root>
    );
  }
);

Modal.displayName = 'Modal';
export default Modal;
