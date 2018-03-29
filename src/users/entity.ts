import { BaseEntity, Entity, PrimaryGeneratedColumn, Column } from 'typeorm'
<<<<<<< HEAD
import { Exclude } from 'class-transformer'
import { MinLength, IsString, IsEmail } from 'class-validator'
=======
import { Exclude } from 'class-transformer';
//'exclude' is an option that excludes the property from the transformed result, here from the classToPlain operation.
import { MinLength, IsString, IsEmail } from 'class-validator';
>>>>>>> 3948dd2d99fa596bf544727421d0577dacb6d7f0
import * as bcrypt from 'bcrypt'

export type Role = 'teacher' | 'admin'

@Entity()
export default class User extends BaseEntity {

  @PrimaryGeneratedColumn()
  id?: number

<<<<<<< HEAD
=======
  // @IsString()
  // @MinLength(2)
  // @Column('text')
  // firstName: string
  //
  // @IsString()
  // @MinLength(2)
  // @Column('text')
  // lastName: string

>>>>>>> 3948dd2d99fa596bf544727421d0577dacb6d7f0
  @IsEmail()
  @Column('text')
  email: string

<<<<<<< HEAD
=======
//Note minimum length of password is 8 characters
>>>>>>> 3948dd2d99fa596bf544727421d0577dacb6d7f0
  @IsString()
  @MinLength(8)
  @Column('text')
  @Exclude({ toPlainOnly: true })
  password: string

  @Column('text', {default: 'teacher'})
  role: Role

  async setPassword(rawPassword: string) {
    const hash = await bcrypt.hash(rawPassword, 10)
    this.password = hash
<<<<<<< HEAD
}

checkPassword(rawPassword: string): Promise<boolean> {
    return bcrypt.compare(rawPassword, this.password)
  }
=======
  }

  checkPassword(rawPassword: string): Promise<boolean> {
    return bcrypt.compare(rawPassword, this.password)
  }

>>>>>>> 3948dd2d99fa596bf544727421d0577dacb6d7f0
}
