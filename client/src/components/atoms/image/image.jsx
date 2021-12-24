import classNames from 'classnames';
import './image.scss';

function Image(props) {
  const { imageSrc = '', alt = 'image', customClass = '', onClick = null } = props;

  const className = classNames('image', customClass);

  return (
    <div>
      <img
        src={imageSrc}
        alt={alt}
        className={className}
        onClick={() => {
          onClick?.();
        }}
        loading={'lazy'}
      />
    </div>
  );
}

export default Image;
