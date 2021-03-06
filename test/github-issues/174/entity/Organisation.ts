import {Entity} from "../../../../src/decorator/entity/Entity";
import {PrimaryGeneratedColumn} from "../../../../src/decorator/columns/PrimaryGeneratedColumn";
import {Column} from "../../../../src/decorator/columns/Column";
import {Embedded} from "../../../../src/decorator/Embedded";
import {Contact} from "./Contact";

@Entity()
export class Organisation {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Embedded(type => Contact)
    contact: Contact;

}