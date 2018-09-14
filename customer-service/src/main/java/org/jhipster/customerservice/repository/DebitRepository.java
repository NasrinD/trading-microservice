package org.jhipster.customerservice.repository;

import org.jhipster.customerservice.domain.Debit;
import org.springframework.stereotype.Repository;

import org.springframework.data.jpa.repository.*;


/**
 * Spring Data JPA repository for the Debit entity.
 */
@SuppressWarnings("unused")
@Repository
public interface DebitRepository extends JpaRepository<Debit, Long> {

}
