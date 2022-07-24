import { invitado } from '../data/invitado';


export const getInvitado = (id = '') => {

    return invitado.filter(invitado => invitado.id === id);
    // return heroes.find(hero => hero.id === id);
}