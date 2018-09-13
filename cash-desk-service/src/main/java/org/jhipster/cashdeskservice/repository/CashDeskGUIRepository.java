package org.jhipster.cashdeskservice.repository;

import org.jhipster.cashdeskservice.domain.CashDeskGUI;
import org.springframework.stereotype.Repository;

import org.springframework.data.jpa.repository.*;


/**
 * Spring Data JPA repository for the CashDeskGUI entity.
 */
@SuppressWarnings("unused")
@Repository
public interface CashDeskGUIRepository extends JpaRepository<CashDeskGUI, Long> {

}
