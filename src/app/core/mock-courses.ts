import { ICourseItem } from './interfaces/course-item.interface';

export const courses: Array<ICourseItem> = [
  {
    id: 1,
    title: 'Video course',
    creatingDate: 486766800000,
    duration: 90,
    description: `Lorem ipsum dolor sit amed,onsectetur adipiscing elit. Donec volutpat enim eu interdum semper.
    Phasellus non turpis ut mauris fringilla ornare non non dolor. Integer ac odio nec orci l
    uctus consectetur pretium sed turpis. Vivamus non metus vehicula purus vulputate blandit in interdum eni
    m. Donec ut metus hendrerit, commodo mauris et, convallis justo. Etiam condimentum ex neque. Nullam portt
    itor pretium imperdiet. Sed eget lobortis nisl, ultricies mollis lacus. `
  },
  {
    id: 2,
    title: 'Online course',
    creatingDate: 979250400000,
    duration: 210,
    description: `Aenean cursus efficitur nulla, quis venenatis sapien viverra non. Curabitur sollicitudin
    vitae libero in sagittis. Mauris semper, sapien et pharetra interdum, erat leo aliquam nibh, vel egestas
    enim ligula vel arcu. Etiam libero justo, dignissim et orci a, auctor egestas erat.
     Donec ultrices fermentum ultricies. Curabitur vel lectus placerat, rhoncus risus vitae, congue purus
     Sed luctus nulla turpis, vel commodo nisl venenatis at. . `
  },
  {
    id: 3,
    title: 'In class course',
    creatingDate: 1510437600000,
    duration: 45,
    description: `Mauris at pellentesque leo. Quisque tempor porttitor tortor, et rutrum elit egestas ultricies
    . Sed aliquam molestie mi, vel ornare erat. Vestibulum cursus nisi quam, ut
    fringilla libero molestie sed. Donec eu nisi et enim eleifend posuere. Fusce
    sem metus, viverra vel odio in, mattis laoreet arcu. Pellentesque venenatis mollis ex id porta`
  },
];
